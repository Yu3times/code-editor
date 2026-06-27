// UTILITIES

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const out = $('#output');
const preview = $("#preview");
const STORAGE_KEY = "academy-codelab-web";

const escapeHtml = s => 
    String(s).replace(/[&<>"]/g, c => ({
        '&': "&amp;",
        '<': "&lt;",
        '>': "&gt;",
        '"': "&quot;"
    }[c]
    ));

function log(msg, type="info") {
    const color = type === "error" ? "var(--err)" : type === "warn" ? "var(--warn)" : "var(--brand)";
    const time = new Date().toLocaleTimeString();

    const line = document.createElement("div");

    line.innerHTML = `<span style="color: ${color}">[${time}]</span> ${escapeHtml(msg)}`;

    out.appendChild(line);
    out.scrollTop = out.scrollHeight;
}