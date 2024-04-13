export class Theme {

  static Day = new Theme('Day', 'day')
  static Twilight = new Theme('Twilight', 'twilight')
  static Night = new Theme('Night', 'night')
  static Comet = new Theme('Comet', 'comet')
  static Oled = new Theme('Oled', 'oled')
  static Pretty = new Theme('Pretty', 'cometp')

  constructor(name, tag) {
    this.name = name
    this.tag = tag
  }

  static getThemes() {
    return [Theme.Day, Theme.Twilight, Theme.Night, Theme.Comet, Theme.Oled]
  }

  static getTheme(tag) {
    let t = this.getThemes()
    for (let e in t) {
      if (t[e].tag === tag) {
        return t[e]
      }
    }
    return null
  }
}
