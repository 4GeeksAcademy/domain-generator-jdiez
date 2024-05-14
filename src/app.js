/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big", "best", "funny"];
let noun = ["jogger", "racoon", "bear", "tiger"];
let ext = [".com", ".net", ".org"];

let part1 = "";
let part2 = "";
let part3 = "";
let domain = "";
let count = 1;

function domainGenerator(pron, adj, noun, ext) {
  for (let i = 0; i < pron.length; i++) {
    part1 = pron[i];
    for (let a = 0; a < adj.length; a++) {
      part2 = part1 + adj[a];
      for (let n = 0; n < noun.length; n++) {
        part3 = part2 + noun[n];
        for (let e = 0; e < ext.length; e++) {
          domain += `<tr><td class="p-3 display-5"><b>${count++}</b> - ${part3}${
            ext[e]
          }</td></tr>`;
        }
      }
    }
  }
  return domain;
}

document.querySelector("#dominios").innerHTML = domainGenerator(
  pronoun,
  adj,
  noun,
  ext
);
