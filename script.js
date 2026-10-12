const projects = {
 triage: {title: 'TriageDesk', category: 'FULL-STACK / CUSTOMER SUPPORT', intro: 'A full-stack customer-support application built by extending the open-source Full Stack FastAPI Template.', points: ['React, TypeScript, FastAPI, and PostgreSQL.', 'Ticket creation, priority-based organization, and ticket status tracking.', 'Customer and support-agent permissions.', 'Ticket conversations and activity history to organize interactions and changes.'], note: 'The project targets a deployed, browser-accessible demonstration. No public demo or repository link was supplied. The portfolio preview is an illustrative mockup, not a screenshot.'},
 guard: {title: 'AgentGuard', category: 'DESIGNED PLATFORM / CODE VERIFICATION', intro: 'A platform designed to give agentic AI systems and coding assistants an isolated environment for validating code changes.', points: ['A verification layer between AI-generated code and production.', 'Supports code execution, test runs, and failure identification before merge or deployment.', 'Focuses on isolating validation workflows from the main application and its data.'], note: 'Presented as a designed platform, matching the résumé. The terminal preview is illustrative and does not indicate real test results or a running service.'},
 neuro: {title: 'NeuroTrace', category: 'PROPOSED / LLM MONITORING & EVALUATION', intro: 'A proposed monitoring and evaluation platform for identifying and logging potential issues in large language model responses.', points: ['Identify potential hallucinations and unsupported claims.', 'Investigate inconsistent answers and instruction-following failures.', 'Give developers visibility into problematic responses and support investigation of model reliability.'], note: 'This is a proposed project, not a completed product. The visual preview represents the concept only.'}
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
 const project = projects[button.dataset.project];
 document.querySelector('#dialog-title').textContent = project.title;
 document.querySelector('#dialog-category').textContent = project.category;
 document.querySelector('#dialog-intro').textContent = project.intro;
 document.querySelector('#dialog-note').textContent = project.note;
 document.querySelector('#dialog-points').replaceChildren(...project.points.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
 dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
 document.querySelectorAll('.project').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
const themeButton = document.querySelector('.theme');
function applyTheme(dark) { document.body.classList.toggle('dark', dark); themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme'); document.querySelector('meta[name="theme-color"]').content = dark ? '#1c211d' : '#eeeae2'; }
try { applyTheme(localStorage.getItem('molishka-theme') === 'dark'); } catch (_) {}
themeButton.addEventListener('click', () => { const dark = !document.body.classList.contains('dark'); applyTheme(dark); try { localStorage.setItem('molishka-theme', dark ? 'dark' : 'light'); } catch (_) {} });
document.querySelector('#copy-email').addEventListener('click', async () => {
 const status = document.querySelector('#copy-status');
 try { await navigator.clipboard.writeText('molishkasahu@gmail.com'); status.textContent = 'Email address copied.'; } catch (_) { status.textContent = 'Copy this address: molishkasahu@gmail.com'; }
});
document.querySelector('#year').textContent = new Date().getFullYear();
