// Write your code here...
import { getMessages, getComments } from "../api";
import { renderContent } from "../utils";
const messagesContainer = document.querySelector("#messages");
const getMessageBtn = document.querySelector("#getMessages");
const spinner = document.querySelector("#spinner");
const errorEl = document.querySelector("#error");

getMessageBtn.addEventListener("click", async () => {
  spinner.style.display = "block";
  messagesContainer.innerHTML = "";
  error.innerText = "";

  try {
    const messages = await getMessages();
    const comments = await getComments();
    renderContent(messages, comments, messagesContainer);
  } catch (error) {
    errorEl.innerText = `${error}`;
  } finally {
    spinner.style.display = "none";
  }
});
