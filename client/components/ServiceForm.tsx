import { useState } from "react";
import { FormField } from "@/data/services";
import { AlertCircle } from "lucide-react";

interface ServiceFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => void;
  isLoading?: boolean;
}

export default function ServiceForm({
  fields,
  onSubmit,
  isLoading = false,
}: ServiceFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.currentTarget;

    if (type === "checkbox") {
      const checkbox = e.currentTarget as HTMLInputElement;
      const currentValues = formData[name] || [];
      if (checkbox.checked) {
        setFormData({
          ...formData,
          [name]: [...currentValues, value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: currentValues.filter((v: string) => v !== value),
        });
      }
    } else if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (field.required) {
        const value = formData[field.name];
        if (!value || (Array.isArray(value) && value.length === 0)) {
          newErrors[field.name] = `${field.label} is required`;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit(formData);
  };

  const renderField = (field: FormField) => {
    const baseClassName =
      "w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors";

    const errorClass = errors[field.name]
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
      : "";

    switch (field.type) {
      case "email":
      case "phone":
      case "text":
        return (
          <div key={field.name} className="mb-6">
            <label className="block text-sm font-medium text-slate-200 mb-2">
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleInputChange}
              className={`${baseClassName} ${errorClass}`}
              required={field.required}
            />
            {field.help && (
              <p className="text-xs text-slate-400 mt-1">{field.help}</p>
            )}
            {errors[field.name] && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors[field.name]}
              </p>
            )}
          </div>
        );

      case "textarea":
        return (
          <div key={field.name} className="mb-6">
            <label className="block text-sm font-medium text-slate-200 mb-2">
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleInputChange}
              rows={4}
              className={`${baseClassName} resize-none ${errorClass}`}
              required={field.required}
            />
            {field.help && (
              <p className="text-xs text-slate-400 mt-1">{field.help}</p>
            )}
            {errors[field.name] && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors[field.name]}
              </p>
            )}
          </div>
        );

      case "select":
        return (
          <div key={field.name} className="mb-6">
            <label className="block text-sm font-medium text-slate-200 mb-2">
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <select
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleInputChange}
              className={`${baseClassName} ${errorClass}`}
              required={field.required}
            >
              <option value="">Select an option</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {field.help && (
              <p className="text-xs text-slate-400 mt-1">{field.help}</p>
            )}
            {errors[field.name] && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors[field.name]}
              </p>
            )}
          </div>
        );

      case "checkbox":
        return (
          <div key={field.name} className="mb-6">
            <label className="block text-sm font-medium text-slate-200 mb-3">
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <div className="space-y-2">
              {field.options?.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={field.name}
                    value={option.value}
                    checked={
                      Array.isArray(formData[field.name]) &&
                      formData[field.name].includes(option.value)
                    }
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-cyan-400 focus:ring-2 focus:ring-cyan-400/20 cursor-pointer"
                  />
                  <span className="text-slate-300">{option.label}</span>
                </label>
              ))}
            </div>
            {field.help && (
              <p className="text-xs text-slate-400 mt-2">{field.help}</p>
            )}
            {errors[field.name] && (
              <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors[field.name]}
              </p>
            )}
          </div>
        );

      case "radio":
        return (
          <div key={field.name} className="mb-6">
            <label className="block text-sm font-medium text-slate-200 mb-3">
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <div className="space-y-2">
              {field.options?.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={field.name}
                    value={option.value}
                    checked={formData[field.name] === option.value}
                    onChange={handleInputChange}
                    className="w-4 h-4 border-slate-700 bg-slate-800 text-cyan-400 focus:ring-2 focus:ring-cyan-400/20 cursor-pointer"
                    required={field.required}
                  />
                  <span className="text-slate-300">{option.label}</span>
                </label>
              ))}
            </div>
            {field.help && (
              <p className="text-xs text-slate-400 mt-2">{field.help}</p>
            )}
            {errors[field.name] && (
              <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors[field.name]}
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => renderField(field))}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
