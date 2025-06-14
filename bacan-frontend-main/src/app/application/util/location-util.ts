export class LocationUtil {
  static convertLangToEmoji(lang: string): string {
    return lang.toUpperCase()
      .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt(0)));
  }
}
