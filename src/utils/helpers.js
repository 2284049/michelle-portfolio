export function truncate(str, length) {
   return str.slice(0, length) + "...";
}

export function safelyParseJson(value) {
   try {
      // try do this first (try to parse the value)
      JSON.parse(value);
   } catch {
      // if error, return the value back unparsed
      return value;
   }
   // if we tried it and it worked, do more
   return JSON.parse(value);
}
