import React from 'react';
import {
  Coffee,
  Code2,
  FileCode,
  Palette,
  Terminal,
  Server,
  Atom,
  Cpu,
  Layers,
  Hash,
  Globe,
  Database,
  FileCheck,
  Smartphone,
  Zap,
  Gem,
  Apple,
  Network,
  Box,
  Binary
} from 'lucide-react';

const ICON_MAP = {
  Coffee,
  Code2,
  FileCode,
  Palette,
  Terminal,
  Server,
  Atom,
  Cpu,
  Layers,
  Hash,
  Globe,
  Database,
  FileCheck,
  Smartphone,
  Zap,
  Gem,
  Apple,
  Network,
  Box,
  Binary
};

export function CategoryIcon({ name, size = 24, color = 'currentColor', className = '' }) {
  const IconComponent = ICON_MAP[name] || Code2;
  return <IconComponent size={size} color={color} className={className} />;
}
