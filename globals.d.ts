interface WebAppInitData {
    query_id?: string;
    user?: WebAppUser;
    receiver?: WebAppUser;
    chat?: WebAppChat;
    chat_type?: string;
    chat_instance?: string;
    start_param?: string;
    can_send_after?: number;
    auth_date: number;
    hash: string;
}

interface WebAppUser {
    id: number;
    is_bot?: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    added_to_attachment_menu?: boolean;
    allows_write_to_pm?: boolean;
    photo_url?: string;
}

interface WebAppChat {
    id: number;
    type: string;
    title: string;
    username?: string;
    photo_url?: string;
}

interface ThemeParams {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
    secondary_bg_color?: string;
    header_bg_color?: string;
    accent_text_color?: string;
    section_bg_color?: string;
    section_header_text_color?: string;
    subtitle_text_color?: string;
    destructive_text_color?: string;
}

interface BackButton {
    isVisible: boolean;
    onClick(callback: Function): BackButton;
    offClick(callback: Function): BackButton;
    show(): BackButton;
    hide(): BackButton;
}

interface MainButton {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText(text: string): MainButton;
    onClick(callback: Function): MainButton;
    offClick(callback: Function): MainButton;
    show(): MainButton;
    hide(): MainButton;
    enable(): MainButton;
    disable(): MainButton;
    showProgress(leaveActive?: boolean): MainButton;
    hideProgress(): MainButton;
    setParams(params: {
        text?: string;
        color?: string;
        text_color?: string;
        is_active?: boolean;
        is_visible?: boolean;
    }): MainButton;
}

interface SettingsButton {
    isVisible: boolean;
    onClick(callback: Function): SettingsButton;
    offClick(callback: Function): SettingsButton;
    show(): SettingsButton;
    hide(): SettingsButton;
}

interface HapticFeedback {
    impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): HapticFeedback;
    notificationOccurred(type: 'error' | 'success' | 'warning'): HapticFeedback;
    selectionChanged(): HapticFeedback;
} 

interface CloudStorage {
    setItem(key: string, value: string, callback?: Function): CloudStorage;
    getItem(key: string, callback: Function): CloudStorage;
    getItems(keys: string[], callback: Function): CloudStorage;
    removeItem(key: string, callback?: Function): CloudStorage;
    removeItems(keys: string[], callback?: Function): CloudStorage;
    getKeys(callback: Function): CloudStorage;
}

interface PopupParams {
    title?: string;
    message: string;
    buttons?: PopupButton[];
}

interface PopupButton {
    id?: string;
    type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive';
    text?: string;
} 

interface ScanQrPopupParams {
    text?: string;
}

interface TelegramWebAppAPI {
    initData: string;
    initDataUnsafe: WebAppInitData;
    version: string;
    platform: string;
    colorScheme: 'light' | 'dark';
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    headerColor: string;
    backgroundColor: string;
    isClosingConfirmationEnabled: boolean;
    BackButton: BackButton;
    MainButton: MainButton;
    SettingsButton: SettingsButton;
    HapticFeedback: HapticFeedback;
    CloudStorage: CloudStorage;
    isVersionAtLeast(version: string): boolean;
    setHeaderColor(color: string): void;
    setBackgroundColor(color: string): void;
    enableClosingConfirmation(): void;
    disableClosingConfirmation(): void;
    onEvent(eventType: string, eventHandler: Function): void;
    offEvent(eventType: string, eventHandler: Function): void;
    sendData(data: string): void;
    switchInlineQuery(query: string, choose_chat_types?: string[]): void;
    openLink(url: string, options?: { try_instant_view?: boolean }): void;
    openTelegramLink(url: string): void;
    openInvoice(url: string, callback?: Function): void;
    showPopup(params: PopupParams, callback?: Function): void;
    showAlert(message: string, callback?: Function): void;
    showConfirm(message: string, callback?: Function): void;
    showScanQrPopup(params: ScanQrPopupParams, callback?: Function): void;
    closeScanQrPopup(): void;
    readTextFromClipboard(callback?: Function): void;
    requestWriteAccess(callback?: Function): void;
    requestContact(callback?: Function): void;
    ready(): void;
    expand(): void;
    close(): void;
}


interface Window {
    Telegram: {
        WebApp: TelegramWebAppAPI
    } | undefined
}
