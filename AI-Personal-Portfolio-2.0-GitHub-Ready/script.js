const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const portfolio={name:"Your Name",role:"AI Enthusiast",email:"hello@example.com",skills:["Python","JavaScript","HTML","CSS","AI","REST APIs","Git","GitHub","SQL"],projects:["GramaMitra AI","CareerPilot AI","Smart Dashboard","Community Connect"]};
$("#year").textContent=new Date().getFullYear();

const roles=["AI Enthusiast","Web Developer","Problem Solver","Creative Builder"];
let ri=0,ci=0,deleting=false;
function typeLoop(){const el=$("#typingText"),word=roles[ri];el.textContent=word.slice(0,ci);if(!deleting&&ci<word.length){ci++;setTimeout(typeLoop,85)}else if(!deleting){deleting=true;setTimeout(typeLoop,1200)}else if(ci>0){ci--;setTimeout(typeLoop,45)}else{deleting=false;ri=(ri+1)%roles.length;setTimeout(typeLoop,300)}} typeLoop();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12}); $$(".reveal").forEach(e=>observer.observe(e));
$$("[data-count]").forEach(el=>{const obs=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;let n=0,target=+el.dataset.count;const t=setInterval(()=>{n++;el.textContent=n;if(n>=target)clearInterval(t)},70);obs.disconnect()}));obs.observe(el)});

window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;$("#scrollProgress").style.width=(scrollY/h*100)+"%"});
$("#themeToggle").onclick=()=>{document.body.classList.toggle("light");localStorage.theme=document.body.classList.contains("light")?"light":"dark";$("#themeToggle").textContent=document.body.classList.contains("light")?"☀":"☾"};
if(localStorage.theme==="light"){document.body.classList.add("light");$("#themeToggle").textContent="☀"}
$("#menuBtn").onclick=()=>$("#navbar")?.classList.toggle("menu-open");
$(".navbar").querySelector("#menuBtn").onclick=()=>$(".navbar").classList.toggle("menu-open");
$$("nav a").forEach(a=>a.onclick=()=>$(".navbar").classList.remove("menu-open"));

$$(".filter").forEach(btn=>btn.onclick=()=>{ $$(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");const f=btn.dataset.filter;$$(".project-card").forEach(c=>c.classList.toggle("hidden",f!=="all"&&!c.dataset.category.includes(f)))});
$$(".demo-link").forEach(a=>a.onclick=e=>{e.preventDefault();toast("Replace this demo link with your live project URL.");});

function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2800)}
$("#contactForm").onsubmit=e=>{e.preventDefault();const name=$("#name").value,email=$("#email").value,subject=encodeURIComponent($("#subject").value),message=encodeURIComponent($("#message").value);window.location.href=`mailto:${portfolio.email}?subject=${subject}&body=${encodeURIComponent("From: "+name+" ("+email+")\n\n")+message}`;$("#formStatus").textContent="Opening your email app…";};

const aiResponses=[
  [/skill|tech|stack|know/i,()=>`The developer's main skills include ${portfolio.skills.join(", ")}.`],
  [/project|built|work|portfolio/i,()=>`Projects include ${portfolio.projects.join(", ")}. Ask me about any of them!`],
  [/contact|email|reach|hire/i,()=>`You can reach ${portfolio.name} at ${portfolio.email}, or use the Contact section.`],
  [/who|about|name/i,()=>`${portfolio.name} is an ${portfolio.role} focused on AI, web development and practical problem solving.`],
  [/experience|journey|education/i,()=>`The portfolio highlights volunteer/community work, AI & web projects, and education. Update the timeline in index.html with your exact details.`],
  [/resume|cv/i,()=>`Use the Download Resume button in the hero section. Replace assets/resume.pdf with your own PDF.`]
];
function aiReply(q){for(const [r,fn] of aiResponses)if(r.test(q))return fn();return "I can answer questions about skills, projects, experience, resume and contact details. Try: “What projects have you built?”";}
function addMsg(text,type){const d=document.createElement("div");d.className="ai-msg "+type;d.textContent=text;$("#aiMessages").appendChild(d);$("#aiMessages").scrollTop=$("#aiMessages").scrollHeight}
$("#aiOpen").onclick=()=>$("#aiPanel").classList.add("open");$("#aiClose").onclick=()=>$("#aiPanel").classList.remove("open");
$("#aiForm").onsubmit=e=>{e.preventDefault();const q=$("#aiInput").value.trim();if(!q)return;addMsg(q,"user");$("#aiInput").value="";setTimeout(()=>addMsg(aiReply(q),"bot"),300)};
$$(".quick-prompts button").forEach(b=>b.onclick=()=>{$("#aiInput").value=b.dataset.q;$("#aiForm").requestSubmit()});
