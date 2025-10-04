export interface InputProps {
  className?: string;
  icon?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'search' | 'email' | 'number';
}