import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart, ThumbsDown, X, ChevronDown, Maximize,
  Volume2, Settings2, House, Search, FolderClosed, ListMusic, Plus, Repeat2, Shuffle,
  Music2, EllipsisVertical, Share2, Disc3, Image, AlignLeft, AlignCenter, AlignRight,
  PanelRight, LayoutGrid } from 'lucide-react';
import spotifyLogo from '../spotify-logo.svg';

const icons = { play: Play, pause: Pause, next: SkipForward, back: SkipBack, heart: Heart,
  dislike: ThumbsDown, close: X, down: ChevronDown, expand: Maximize, volume: Volume2,
  settings: Settings2, home: House, search: Search, library: FolderClosed, queue: ListMusic,
  plus: Plus, repeat: Repeat2, shuffle: Shuffle, note: Music2, more: EllipsisVertical,
  share: Share2, disc: Disc3, image: Image, alignLeft: AlignLeft, alignCenter: AlignCenter,
  alignRight: AlignRight, panel: PanelRight, grid: LayoutGrid };
export function Icon({ name, filled = false }) {
  const Component = icons[name] || Music2;
  return <Component size={22} strokeWidth={1.6} fill={filled ? 'currentColor' : 'none'} aria-hidden="true"/>;
}
export function WaveMark() {
  return <span className="wv-brand-logo" aria-hidden="true" dangerouslySetInnerHTML={{ __html: spotifyLogo }}/>;
}
