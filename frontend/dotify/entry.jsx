import { R as React, _ as ReactDOM } from './original/vendor-ui-BwX-1h7U.js';
import Player from './original/view--KkOqVCp.js';
import { OriginalShell, OriginalMini, OriginalNavigation, OriginalFullscreenPortal, OriginalPanelFrame, OriginalPlaybackPanel, OriginalTabPage, OriginalThemeAutomation, OriginalBackground, OriginalWindowControls } from './original/main-DVjTVWDM.js';
import Home from './original/view-CvHfwEcU.js';
import Search from './original/view-CtpRf6zv.js';
import Library from './original/view-juTcB9hq.js';
import Settings from './original/view-B8ykjgw8.js';
import { OriginalMaterialSettings } from './original/seek-KEpYCFv_.js';
import { OriginalLibrarySections } from './original/view-juTcB9hq.js';
import { OriginalSectionTabs } from './original/titles-4S49xODV.js';
import { B as Button, I as Icons, OriginalShuffle, OriginalThemes, OriginalThemeGroups, originalThemeVariables, OriginalCustomAssets } from './original/globals-Bc3qFUyf.js';
import { navigationStore, playerStore, panelStore, notificationStore, settingsStore, FloatingTrackMenu, PlaylistPicker, call, registerOriginalUi, useAppliedSettings } from './runtime.jsx';
registerOriginalUi({ Button, Icons, Shuffle: OriginalShuffle, LibrarySections: OriginalLibrarySections, SectionTabs: OriginalSectionTabs, Themes: OriginalThemes, ThemeGroups: OriginalThemeGroups, themeVariables: originalThemeVariables, CustomAssets: OriginalCustomAssets });

function App() {
  useAppliedSettings();
  OriginalMaterialSettings(settingsStore(s => s.settings));
  const page = navigationStore(s => s.activeTab), fullscreen = playerStore(s=>s.isPlayerPortalOpen), [hovered, setHovered] = React.useState(false);
  const settings = settingsStore(s => s.settings.playerSettings), error = notificationStore(s => s.error);
  const panel = panelStore(s => s.panel), dimensions = panelStore(s => s.width);
  const transparent = settingsStore(s => s.settings.uiSettings.transparency.enabled);
  const visiblePage = page === 'settings' ? 'player' : page;
  const content = <>{[['home', <Home setActiveTab={navigationStore.getState().setActiveTab}/>], ['player', <Player/>], ['search', <Search/>], ['library', <Library/>]].map(([value, component]) => <OriginalTabPage key={value} value={value} activeTab={visiblePage} className="tab-content" keepAlive={false} pauseHidden={true}>{component}</OriginalTabPage>)}</>;
  return <><OriginalBackground/><OriginalThemeAutomation/><Settings><OriginalShell activeTab={page} isTabsHovered={hovered} setIsTabsHovered={setHovered} onTabChange={navigationStore.getState().setActiveTab}
    tabs={<OriginalNavigation isTabsHovered={hovered} setIsTabsHovered={setHovered}/>}
    content={content} panel={<OriginalPanelFrame open={!!panel} width={dimensions}><OriginalPlaybackPanel panel={panel || 'queue'}/></OriginalPanelFrame>} miniplayer={<OriginalMini handleOpenFullCoverMode={() => playerStore.getState().setIsPlayerPortalOpen(true)} position={settings.miniplayer.position} background={settings.miniplayer.background} progressModes={settings.miniplayer.progressModes} cover={settings.miniplayer.cover} border={settings.miniplayer.border} isTransparencyEnabled={transparent}/>}/></Settings>
    <div className="fixed right-2 top-2 z-[9999999] flex items-center gap-0.5"><OriginalWindowControls/></div>
    {fullscreen && <OriginalFullscreenPortal/>}
    <FloatingTrackMenu/>
    <PlaylistPicker/>
    {error && <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[99999999] rounded-xl border border-border-subtle bg-overlay px-4 py-3 text-sm" role="alert" onClick={() => notificationStore.setState({ error: '' })}>{error}</div>}
  </>;
}
class Boundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error) { console.error(error); }
  render() { return this.state.error ? <main className="p-8 text-foreground"><p role="alert">{this.state.error.message}</p><Button onClick={() => { navigationStore.getState().setActiveTab('home'); this.setState({ error: null }); }}>Перезагрузить интерфейс</Button></main> : this.props.children; }
}
ReactDOM.createRoot(document.getElementById('root')).render(<Boundary><App/></Boundary>);
parent.postMessage({ type: 'wave-ui:ready' }, '*');
