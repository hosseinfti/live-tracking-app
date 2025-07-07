export function renderPriority(level: number): string {
  switch (level) {
    case 0:
      return "🟢 Low";
    case 1:
      return "🟡 Medium";
    case 2:
      return "🟠 High";
    case 3:
      return "🔴 Emergency";
    default:
      return "نامشخص";
  }
}

export function renderGpsSignal(signal: number | null): string {
  switch (signal) {
    case 0:
      return "🟢 خوب";
    case 1:
      return "🟡 متوسط";
    case 2:
      return "🔴 ضعیف";
    default:
      return "نامشخص";
  }
}

export function renderCardinalPoint(cp: number | null): string {
  switch (cp) {
    case 0:
      return "⬆️ شمال";
    case 1:
      return "➡️ شرق";
    case 2:
      return "⬇️ جنوب";
    case 3:
      return "⬅️ غرب";
    default:
      return "❔ نامشخص";
  }
}
