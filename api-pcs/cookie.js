const url = ':1example.pcs.fr';
const capturedString = url.match(/^(?:https?:\/\/)?([\w]+)\.pcs\.fr/)?.[1] || "";
console.log(capturedString);