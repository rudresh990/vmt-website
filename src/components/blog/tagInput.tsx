'use client';
import { useState, useEffect } from 'react';
import { useDebounce } from '@/app/dashboard/write/debounce';

export default function TagInput({ value = [], onChange }: any) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const debounced = useDebounce(input, 500);

  const normalizeTag = (tag: string) => tag.trim().toLowerCase().replace(/\s+/g, '-');

  // 🔍 Fetch suggestions
  useEffect(() => {
    if (!debounced) {
      setSuggestions([]);
      return;
    }

    const fetchTags = async () => {
      const res = await fetch(`/api/tags?q=${debounced}`);
      const data = await res.json();
      setSuggestions(data);
    };

    fetchTags();
  }, [debounced]);

  // ➕ Add tag
  const addTag = (val: string) => {
    const normalized = normalizeTag(val);

    if (!normalized) return;

    if (value.includes(normalized)) return;

    if (value.length >= 5) {
      alert('Max 5 tags allowed');
      return;
    }

    const updated = [...value, normalized];

    onChange(updated); // ✅ send to parent

    setInput('');
    setSuggestions([]);
    setActiveIndex(0);
  };

  // ❌ Remove tag
  const removeTag = (tag: string) => {
    const updated = value.filter((t: string) => t !== tag);
    onChange(updated); // ✅ sync with parent
  };

  // ⌨️ Keyboard Navigation
  const handleKeyDown = (e: any) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }

    if (e.key === 'Enter') {
      e.preventDefault();

      if (suggestions[activeIndex]) {
        addTag(suggestions[activeIndex].name);
      } else {
        addTag(input);
      }
    }
  };

  return (
    <div className="space-y-3 relative">
      {/* Selected Tags */}
      <div className="flex flex-wrap gap-2">
        {value.map((tag: string) => (
          <span
            key={tag}
            className="px-2 py-1 bg-cyan-500 text-black rounded flex items-center gap-2"
          >
            {tag}
            <button onClick={() => removeTag(tag)}>×</button>
          </span>
        ))}
      </div>

      {/* Input */}
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setActiveIndex(0);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Type to search or create tags..."
        className="w-full px-3 py-2 bg-[#020617] border border-gray-700 rounded-xl"
      />

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="absolute w-full bg-[#020617] border border-gray-700 rounded shadow-lg z-10">
          {suggestions.map((tag, index) => (
            <div
              key={tag.id}
              onClick={() => addTag(tag.name)}
              className={`px-3 py-2 cursor-pointer ${
                index === activeIndex ? 'bg-cyan-500 text-black' : 'hover:bg-white/10'
              }`}
            >
              {tag.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
