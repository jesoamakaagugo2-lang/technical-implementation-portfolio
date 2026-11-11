// Preserve convenient links from outreach and support linking directly to a sample.
function revealLinkedContent(){
  const id=decodeURIComponent(location.hash.slice(1));
  if(!id)return;
  const target=document.getElementById(id);
  if(target?.tagName==='DETAILS')target.open=true;
}
window.addEventListener('hashchange',revealLinkedContent);
revealLinkedContent();
