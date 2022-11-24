export interface ISettingsState {
  nationalities: INationality[];
}

export interface INationality {
  flag: string;
  name: string;
  abbreviation: string;
}
