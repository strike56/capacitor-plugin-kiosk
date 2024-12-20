export interface KioskModePlugin {
	isInKioskMode(): Promise<KioskModeStatus>;
	enterKioskMode(): Promise<void>;
	exitKioskMode(): Promise<void>;
	toggleKioskMode(): Promise<void>;
	test(): Promise<void>;
}

export interface KioskModeStatus {
	value: boolean;
}