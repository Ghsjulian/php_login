// var name = "Ghs Julian hacker";
export function ghsTest(input_value) {
  let value = input_value.trim();
  if (
    value.includes("/") ||
    value.includes("*") ||
    value.includes("%") ||
    value.includes("$") ||
    value.includes("#") ||
    value.includes("+") ||
    value.includes("-") ||
    value.includes(";") ||
    value.includes("?") ||
    value.includes("instagram") ||
    value.includes("Instagram") ||
    value.includes("where") ||
    value.includes("Where") ||
    value.includes("how") ||
    value.includes("what") ||
    value.includes("which") ||
    value.includes("Which") ||
    value.includes("What") ||
    value.includes("How") ||
    value.includes("Hello") ||
    value.includes("hello") ||
    value.includes("<script>") ||
    value.includes("<") ||
    value.includes("alert") ||
    value.includes("(") ||
    value.includes(")") ||
    value.includes("php") ||
    value.includes("window") ||
    value.includes("||") ||
    value.includes("[") ||
    value.includes("]") ||
    value.includes(">") ||
    value.includes("{") ||
    value.includes("}") ||
    value.includes(":") ||
    value.includes("'") ||
    value.includes("_") ||
    value.includes("=") ||
    value.includes("!") ||
    value.includes("12345") ||
    value.includes("Abc") ||
    value.includes("Sex") ||
    value.includes("Fuck") ||
    value.includes("SELECT") ||
    value.includes("select") ||
    value.includes("href") ||
    value.includes("hot") ||
    value.includes("sexy") ||
    value.includes("Hot") ||
    value.includes("Sexy") ||
    value.includes("LoL") ||
    value.includes("Lol") ||
    value.includes("Naked") ||
    value.includes("<html>") ||
    value.includes("<--->") ||
    value.includes("Google") ||
    value.includes("Facebook") ||
    value.includes("Twitter") ||
    value.includes("Phone") ||
    value.includes("Developer") ||
    value.includes("Code") ||
    value.includes("Internet") ||
    value.includes("Communication") ||
    value.includes("0") ||
    value.includes("6") ||
    value.includes("`") ||
    value.includes("~") ||
    value.includes("√") ||
    value.includes(",") ||
    value.includes("'") ||
    value.includes("•") ||
    value.includes("|") ||
    value.includes("÷") ||
    value.includes("1234567890") ||
    value.includes("qwert") ||
    value.includes("Hacker") ||
    value.includes("×") ||
    value.includes("friend") ||
    value.includes("idiot") ||
    value.includes("programmer") ||
    value.includes("hacker") ||
    value.includes("⁵") ||
    value.includes("⅘")
  ) {
    return true;
  } else {
    return false;
  }
}