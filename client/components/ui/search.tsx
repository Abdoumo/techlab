import * as React from "react"
import { cn } from "@/lib/utils"
import { Search, X } from "lucide-react"

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, type = "text", onClear, ...props }, ref) => {
    const [hasValue, setHasValue] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    const handleClear = () => {
      if (ref && 'current' in ref) {
        ref.current!.value = '';
        ref.current!.focus();
      }
      setHasValue(false);
      onClear?.();
    };

    return (
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-lg border border-slate-700 bg-slate-800 py-3 pl-10 pr-10 text-slate-300 placeholder-slate-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50",
            className
          )}
          ref={ref}
          onChange={handleChange}
          {...props}
        />
        {hasValue && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
            type="button"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput"

export { SearchInput }
