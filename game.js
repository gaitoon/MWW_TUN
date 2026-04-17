// ============================================================
// PIXELATED EMOJI SYSTEM
// ============================================================
const PX_EMOJI = {
  '🏃': '<svg viewBox="0 0 16 16" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="7" y="1" width="3" height="3" fill="#FFD700"/><rect x="6" y="4" width="5" height="3" fill="#4CAF50"/><rect x="8" y="7" width="2" height="4" fill="#2196F3"/><rect x="6" y="8" width="2" height="1" fill="#2196F3"/><rect x="10" y="8" width="2" height="1" fill="#2196F3"/><rect x="8" y="11" width="2" height="3" fill="#8B4513"/><rect x="6" y="12" width="2" height="2" fill="#8B4513"/></svg>',
  '⭐': '<svg viewBox="0 0 12 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="5" y="0" width="2" height="2" fill="#FFD700"/><rect x="5" y="10" width="2" height="2" fill="#FFD700"/><rect x="0" y="5" width="2" height="2" fill="#FFD700"/><rect x="10" y="5" width="2" height="2" fill="#FFD700"/><rect x="1" y="1" width="2" height="2" fill="#FFD700"/><rect x="9" y="1" width="2" height="2" fill="#FFD700"/><rect x="1" y="9" width="2" height="2" fill="#FFD700"/><rect x="9" y="9" width="2" height="2" fill="#FFD700"/><rect x="3" y="3" width="6" height="6" fill="#FFD700"/><rect x="4" y="4" width="4" height="4" fill="#FFFCE8"/></svg>',
  '♦': '<svg viewBox="0 0 12 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="5" y="1" width="2" height="2" fill="#CC0000"/><rect x="3" y="3" width="6" height="2" fill="#CC0000"/><rect x="1" y="5" width="10" height="2" fill="#CC0000"/><rect x="3" y="7" width="6" height="2" fill="#CC0000"/><rect x="5" y="9" width="2" height="2" fill="#CC0000"/></svg>',
  '▶': '<svg viewBox="0 0 12 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="2" y="1" width="2" height="10" fill="#4CAF50"/><rect x="4" y="2" width="2" height="8" fill="#4CAF50"/><rect x="6" y="3" width="2" height="6" fill="#4CAF50"/><rect x="8" y="4" width="2" height="4" fill="#4CAF50"/><rect x="10" y="5" width="1" height="2" fill="#4CAF50"/></svg>',
  '✕': '<svg viewBox="0 0 12 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="1" y="1" width="2" height="2" fill="#CC0000"/><rect x="3" y="3" width="2" height="2" fill="#CC0000"/><rect x="5" y="5" width="2" height="2" fill="#CC0000"/><rect x="7" y="7" width="2" height="2" fill="#CC0000"/><rect x="9" y="9" width="2" height="2" fill="#CC0000"/><rect x="9" y="1" width="2" height="2" fill="#CC0000"/><rect x="7" y="3" width="2" height="2" fill="#CC0000"/><rect x="3" y="7" width="2" height="2" fill="#CC0000"/><rect x="1" y="9" width="2" height="2" fill="#CC0000"/></svg>',
  '✓': '<svg viewBox="0 0 12 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="1" y="5" width="2" height="2" fill="#4CAF50"/><rect x="3" y="7" width="2" height="2" fill="#4CAF50"/><rect x="5" y="9" width="2" height="2" fill="#4CAF50"/><rect x="7" y="7" width="2" height="2" fill="#4CAF50"/><rect x="9" y="2" width="2" height="4" fill="#4CAF50"/></svg>',
  '⚙': '<svg viewBox="0 0 14 14" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="5" y="0" width="4" height="2" fill="#888"/><rect x="5" y="12" width="4" height="2" fill="#888"/><rect x="0" y="5" width="2" height="4" fill="#888"/><rect x="12" y="5" width="2" height="4" fill="#888"/><rect x="2" y="2" width="2" height="2" fill="#888"/><rect x="10" y="2" width="2" height="2" fill="#888"/><rect x="2" y="10" width="2" height="2" fill="#888"/><rect x="10" y="10" width="2" height="2" fill="#888"/><rect x="4" y="4" width="6" height="6" fill="#888"/><rect x="5" y="5" width="4" height="4" fill="#555"/></svg>',
  '🌐': '<svg viewBox="0 0 14 14" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="4" y="1" width="6" height="2" fill="#2196F3"/><rect x="2" y="3" width="10" height="2" fill="#2196F3"/><rect x="1" y="5" width="12" height="4" fill="#2196F3"/><rect x="2" y="9" width="10" height="2" fill="#2196F3"/><rect x="4" y="11" width="6" height="2" fill="#2196F3"/><rect x="6" y="2" width="2" height="10" fill="#4CAF50"/><rect x="4" y="6" width="6" height="2" fill="#4CAF50"/></svg>',
  '🔊': '<svg viewBox="0 0 14 14" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="0" y="4" width="2" height="6" fill="#C9A84C"/><rect x="2" y="3" width="1" height="8" fill="#C9A84C"/><rect x="3" y="2" width="1" height="10" fill="#C9A84C"/><rect x="4" y="4" width="1" height="6" fill="#C9A84C"/><rect x="6" y="5" width="1" height="4" fill="#C9A84C"/><rect x="8" y="3" width="1" height="8" fill="#C9A84C"/><rect x="10" y="1" width="1" height="12" fill="#C9A84C"/></svg>',
  '🎵': '<svg viewBox="0 0 12 14" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="8" y="0" width="2" height="10" fill="#C9A84C"/><rect x="6" y="2" width="2" height="8" fill="#C9A84C"/><rect x="2" y="10" width="4" height="3" fill="#C9A84C"/><rect x="6" y="10" width="4" height="3" fill="#C9A84C"/><rect x="3" y="11" width="2" height="1" fill="#000"/><rect x="7" y="11" width="2" height="1" fill="#000"/></svg>',
  '👥': '<svg viewBox="0 0 18 14" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="2" y="1" width="3" height="3" fill="#C9A84C"/><rect x="1" y="5" width="5" height="4" fill="#C9A84C"/><rect x="0" y="9" width="7" height="4" fill="#C9A84C"/><rect x="13" y="1" width="3" height="3" fill="#C9A84C"/><rect x="12" y="5" width="5" height="4" fill="#C9A84C"/><rect x="11" y="9" width="7" height="4" fill="#C9A84C"/></svg>',
  '🎮': '<svg viewBox="0 0 18 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="2" y="3" width="14" height="6" fill="#555"/><rect x="1" y="4" width="1" height="4" fill="#333"/><rect x="16" y="4" width="1" height="4" fill="#333"/><rect x="4" y="5" width="1" height="2" fill="#FFD700"/><rect x="3" y="6" width="3" height="1" fill="#FFD700"/><rect x="13" y="5" width="2" height="2" fill="#4CAF50"/><rect x="11" y="7" width="2" height="2" fill="#2196F3"/></svg>',
  '☰': '<svg viewBox="0 0 12 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="1" y="2" width="10" height="2" fill="#C9A84C"/><rect x="1" y="5" width="10" height="2" fill="#C9A84C"/><rect x="1" y="8" width="10" height="2" fill="#C9A84C"/></svg>',
  '⏮': '<svg viewBox="0 0 14 14" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="0" y="0" width="2" height="14" fill="#C9A84C"/><rect x="10" y="3" width="2" height="8" fill="#C9A84C"/><rect x="8" y="4" width="2" height="6" fill="#C9A84C"/><rect x="6" y="5" width="2" height="4" fill="#C9A84C"/><rect x="4" y="6" width="2" height="2" fill="#C9A84C"/></svg>',
  '⏸': '<svg viewBox="0 0 12 14" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="1" y="1" width="4" height="12" fill="#C9A84C"/><rect x="7" y="1" width="4" height="12" fill="#C9A84C"/></svg>',
  '⏭': '<svg viewBox="0 0 14 14" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="12" y="0" width="2" height="14" fill="#C9A84C"/><rect x="2" y="3" width="2" height="8" fill="#C9A84C"/><rect x="4" y="4" width="2" height="6" fill="#C9A84C"/><rect x="6" y="5" width="2" height="4" fill="#C9A84C"/><rect x="8" y="6" width="2" height="2" fill="#C9A84C"/></svg>',
  '●': '<svg viewBox="0 0 8 8" style="display:inline-block;vertical-align:middle;width:0.7em;height:0.7em;image-rendering:pixelated;"><rect x="2" y="2" width="4" height="4" fill="currentColor"/><rect x="1" y="3" width="6" height="2" fill="currentColor"/><rect x="3" y="1" width="2" height="6" fill="currentColor"/></svg>',
  '✦': '<svg viewBox="0 0 12 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="5" y="0" width="2" height="3" fill="#FFD700"/><rect x="5" y="9" width="2" height="3" fill="#FFD700"/><rect x="0" y="5" width="3" height="2" fill="#FFD700"/><rect x="9" y="5" width="3" height="2" fill="#FFD700"/><rect x="2" y="2" width="2" height="2" fill="#FFD700"/><rect x="8" y="2" width="2" height="2" fill="#FFD700"/><rect x="2" y="8" width="2" height="2" fill="#FFD700"/><rect x="8" y="8" width="2" height="2" fill="#FFD700"/></svg>',
  '🏆': '<svg viewBox="0 0 16 18" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="1" y="2" width="3" height="4" fill="#FFD700"/><rect x="12" y="2" width="3" height="4" fill="#FFD700"/><rect x="4" y="1" width="8" height="8" fill="#FFD700"/><rect x="6" y="9" width="4" height="4" fill="#8B6914"/><rect x="4" y="13" width="8" height="4" fill="#8B6914"/><rect x="7" y="4" width="2" height="2" fill="#FFFCE8"/></svg>',
  '🔥': '<svg viewBox="0 0 14 18" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="6" y="1" width="2" height="3" fill="#FFD700"/><rect x="4" y="3" width="6" height="2" fill="#FFD700"/><rect x="3" y="5" width="8" height="3" fill="#FF8C00"/><rect x="2" y="8" width="10" height="4" fill="#FF4500"/><rect x="3" y="12" width="8" height="3" fill="#CC0000"/><rect x="5" y="15" width="4" height="2" fill="#880000"/><rect x="7" y="5" width="2" height="2" fill="#FFFCE8"/></svg>',
  '💎': '<svg viewBox="0 0 14 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="4" y="0" width="6" height="2" fill="#00CED1"/><rect x="2" y="2" width="10" height="2" fill="#00CED1"/><rect x="1" y="4" width="12" height="2" fill="#4DD0E1"/><rect x="3" y="6" width="8" height="2" fill="#4DD0E1"/><rect x="5" y="8" width="4" height="2" fill="#26C6DA"/><rect x="6" y="10" width="2" height="2" fill="#00ACC1"/></svg>',
  '📚': '<svg viewBox="0 0 16 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="1" y="2" width="4" height="9" fill="#CC0000"/><rect x="1" y="2" width="4" height="1" fill="#880000"/><rect x="6" y="1" width="4" height="10" fill="#2196F3"/><rect x="6" y="1" width="4" height="1" fill="#1565C0"/><rect x="11" y="3" width="4" height="8" fill="#4CAF50"/><rect x="11" y="3" width="4" height="1" fill="#2E7D32"/></svg>',
  '🃏': '<svg viewBox="0 0 14 18" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="0" y="0" width="14" height="18" fill="#FFFCE8"/><rect x="0" y="0" width="14" height="18" fill="none" stroke="#000" stroke-width="1"/><rect x="2" y="2" width="3" height="3" fill="#CC0000"/><rect x="5" y="8" width="4" height="4" fill="#CC0000"/></svg>',
  '⚠': '<svg viewBox="0 0 14 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="6" y="0" width="2" height="2" fill="#FFD700"/><rect x="4" y="2" width="6" height="2" fill="#FFD700"/><rect x="2" y="4" width="10" height="2" fill="#FFD700"/><rect x="1" y="6" width="12" height="4" fill="#FFD700"/><rect x="0" y="10" width="14" height="2" fill="#FFD700"/><rect x="6" y="4" width="2" height="4" fill="#000"/><rect x="6" y="9" width="2" height="1" fill="#000"/></svg>',
  '◆': '<svg viewBox="0 0 12 12" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="5" y="0" width="2" height="2" fill="#FFD700"/><rect x="3" y="2" width="6" height="2" fill="#FFD700"/><rect x="1" y="4" width="10" height="4" fill="#FFD700"/><rect x="3" y="8" width="6" height="2" fill="#FFD700"/><rect x="5" y="10" width="2" height="2" fill="#FFD700"/></svg>',
  '🎯': '<svg viewBox="0 0 14 14" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="3" y="1" width="8" height="2" fill="#CC0000"/><rect x="1" y="3" width="12" height="8" fill="#CC0000"/><rect x="3" y="11" width="8" height="2" fill="#CC0000"/><rect x="4" y="4" width="6" height="6" fill="#FFFCE8"/><rect x="5" y="5" width="4" height="4" fill="#CC0000"/><rect x="6" y="6" width="2" height="2" fill="#FFD700"/></svg>',
  '👑': '<svg viewBox="0 0 24 24" style="display:inline-block;vertical-align:middle;width:1em;height:1em;image-rendering:pixelated;"><rect x="2" y="16" width="20" height="4" fill="#FFD700"/><rect x="4" y="12" width="16" height="4" fill="#FFD700"/><rect x="2" y="10" width="4" height="3" fill="#FFD700"/><rect x="10" y="7" width="4" height="5" fill="#FFD700"/><rect x="18" y="10" width="4" height="3" fill="#FFD700"/><rect x="11" y="4" width="2" height="3" fill="#FFD700"/><rect x="4" y="7" width="2" height="3" fill="#FFD700"/><rect x="18" y="7" width="2" height="3" fill="#FFD700"/></svg>'
};
function pxEmoji(text){ return text.replace(/[🏃⭐♦▶✕✓⚙🌐🔊🎵👥🎮☰⏮⏸⏭●✦🏆🔥💎📚🃏⚠◆🎯👑]/g, m=>PX_EMOJI[m]||m); }

// ============================================================
// AUDIO & MUSIC
// ============================================================
const AC=typeof AudioContext!=='undefined'?new AudioContext():null;
function beep(f,d,v=0.3,t='square'){
  if(!AC||!SFX_ON)return;
  try{
    const o=AC.createOscillator(),g=AC.createGain();
    o.connect(g);g.connect(AC.destination);
    o.frequency.value=f;o.type=t;
    g.gain.setValueAtTime(v,AC.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,AC.currentTime+d);
    o.start(AC.currentTime);o.stop(AC.currentTime+d);
  }catch(e){}
}
function sfxCard(){beep(520,0.06,0.25,'square');}
function sfxHover(){beep(660,0.04,0.1);}
function sfxWin(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>beep(f,0.2,0.3),i*80));}
function sfxLose(){[300,250,180].forEach((f,i)=>setTimeout(()=>beep(f,0.25,0.25,'sawtooth'),i*120));}
function sfxClick(){beep(700,0.05,0.2,'square');}
function sfxCoin(){beep(880,0.08,0.2);setTimeout(()=>beep(1100,0.12,0.2),80);}
// Chkobba-specific sounds
function sfxCapture(){beep(440,0.08,0.12,'square');setTimeout(()=>beep(600,0.1,0.15,'square'),90);}
function sfxChkobba(){[660,880,1100,880,1100].forEach((f,i)=>setTimeout(()=>beep(f,0.18,0.15,'square'),i*70));}
function sfxEl7aya(){[330,440,550,440,330,550].forEach((f,i)=>setTimeout(()=>beep(f,0.2,0.12,'sawtooth'),i*60));}

document.addEventListener('click',()=>{if(AC&&AC.state==='suspended')AC.resume();},{once:true});

let SFX_ON=true, MUSIC_ON=true;

// ============================================================
// PLAYLIST MUSIC SYSTEM
// ============================================================
const bgMusic=document.getElementById('bgMusic');
bgMusic.volume=0.3; // Set volume to 30% (0.0 to 1.0)

// 🎵 YOUR PLAYLIST - ADD YOUR SONGS HERE! 🎵
const playlist=[
  {name:'Yrouli',file:'Yrouli.mp3'},
  {name:'Bnedem',file:'Bnedem.mp3'},
  {name:'Khalli Yesmaa',file:'Khalli Yesmaa Kol El Alam.mp3'},
  {name:'Teshir Aynik',file:'Teshir Aynik.mp3'},
  {name:'Ya Mimti El Ghalia',file:'Ya Mimti El Ghalia.mp3'},
  // Add more songs like this:
  // {name:'My Song 3',file:'song3.mp3'},
  // {name:'Epic Music',file:'music/epic.mp3'},
];

let currentTrack=0;
let musicStarted=false;

function loadTrack(index, skipPopup=false){
  if(index<0)index=playlist.length-1;
  if(index>=playlist.length)index=0;
  currentTrack=index;
  
  const track=playlist[currentTrack];
  bgMusic.src=track.file;
  
  // Update UI
  document.getElementById('currentSongName').textContent=track.name;
  document.getElementById('npSongName').textContent=track.name;
  
  // Show now playing popup ONLY when actually changing songs
  if(!skipPopup && musicStarted){
    showNowPlaying();
  }
  
  if(musicStarted&&MUSIC_ON){
    bgMusic.play().catch(e=>console.log('Playback error:',e));
  }
}

function showNowPlaying(){
  const popup=document.getElementById('nowPlaying');
  popup.classList.remove('hide');
  popup.classList.add('show');
  
  setTimeout(()=>{
    popup.classList.remove('show');
    popup.classList.add('hide');
  },3000);
}

function nextSong(){
  sfxClick();
  loadTrack(currentTrack+1);
}

function prevSong(){
  sfxClick();
  loadTrack(currentTrack-1);
}

function togglePlayPause(){
  sfxClick();
  const btn=document.getElementById('playPauseBtn');
  
  if(bgMusic.paused){
    bgMusic.play();
    btn.textContent='⏸';
    musicStarted=true;
  }else{
    bgMusic.pause();
    btn.textContent='▶';
  }
}

function playMusic(){
  if(MUSIC_ON){
    bgMusic.play().catch(e=>{
      console.log('Music will start after user interaction');
    });
    document.getElementById('playPauseBtn').textContent='⏸';
  }
}

function pauseMusic(){
  bgMusic.pause();
  document.getElementById('playPauseBtn').textContent='▶';
}

function toggleMusic(){
  // MUSIC_ON is already set by the caller — just act on it, don't flip it again
  if(MUSIC_ON){
    playMusic();
  }else{
    pauseMusic();
  }
}

function menuToggleMute(){
  sfxClick();
  MUSIC_ON = !MUSIC_ON;
  const waves = document.getElementById('waveLines');
  const muteX = document.getElementById('muteX');
  const muteIcon = document.getElementById('muteIcon');
  if(MUSIC_ON){
    playMusic();
    if(waves) waves.style.display = '';
    if(muteX) muteX.style.display = 'none';
    if(muteIcon) muteIcon.setAttribute('fill','#C9A84C');
    document.getElementById('togMusic').classList.add('on');
  } else {
    pauseMusic();
    if(waves) waves.style.display = 'none';
    if(muteX) muteX.style.display = '';
    if(muteIcon) muteIcon.setAttribute('fill','#FF4444');
    document.getElementById('togMusic').classList.remove('on');
  }
}

// Auto-next when song ends
bgMusic.addEventListener('ended',()=>{
  nextSong();
});

// Update time display
bgMusic.addEventListener('timeupdate',()=>{
  const current=Math.floor(bgMusic.currentTime);
  const total=Math.floor(bgMusic.duration)||0;
  const formatTime=(s)=>{
    const m=Math.floor(s/60);
    const sec=s%60;
    return m+':'+(sec<10?'0':'')+sec;
  };
  document.getElementById('songTime').textContent=formatTime(current)+' / '+formatTime(total);
});

// Load first track and start on first click
loadTrack(0, true);
// Apply current language on startup
document.addEventListener('DOMContentLoaded', ()=>{
  updateLanguage();
  // Pixelize all emojis on page
  document.querySelectorAll('*').forEach(el=>{
    if(el.childNodes.length){
      el.childNodes.forEach(node=>{
        if(node.nodeType===3 && node.textContent.match(/[🏃⭐♦▶✕✓⚙🌐🔊🎵👥🎮☰⏮⏸⏭●✦🏆🔥💎📚🃏⚠◆🎯👑]/)){
          const span=document.createElement('span');
          span.innerHTML=pxEmoji(node.textContent);
          node.replaceWith(span);
        }
      });
    }
  });
});
// Fallback in case DOMContentLoaded already fired
if(document.readyState !== 'loading') updateLanguage(); // Skip popup on initial load
document.addEventListener('click',()=>{
  if(!musicStarted&&MUSIC_ON){
    playMusic();
    musicStarted=true;
  }
},{once:true});

// ============================================================
// SETTINGS STATE
// ============================================================
let selectedRounds=7;
let selectedDifficulty='medium';
let selectedMode='1v1'; // '1v1' or '2v2' // easy, medium, hard
let selectedGame='51'; // '51' or 'chkobba'
let currentLang='en'; // ar or en

// ── AI Player Names (customisable in Settings) ──────────────────────────────
// Defaults: SAMI, LAYLA, KARIM — stored in localStorage so they persist
const AI_NAME_DEFAULTS = ['SAMI', 'LAYLA', 'KARIM'];
let AI_NAMES = [...AI_NAME_DEFAULTS];

function loadAiNames(){
  try {
    const saved = localStorage.getItem('mw_ai_names');
    if(saved){
      const parsed = JSON.parse(saved);
      if(Array.isArray(parsed) && parsed.length === 3){
        AI_NAMES = parsed.map((n,i) => (n && n.trim()) ? n.trim().toUpperCase().slice(0,10) : AI_NAME_DEFAULTS[i]);
      }
    }
    // Load rami win bonus setting
    window.ramiWinBonus = localStorage.getItem('mw_rami_win_bonus') === 'true';
  } catch(e){}
  // Populate the inputs so they show current names when settings opens
  const inputs = ['aiName1Input','aiName2Input','aiName3Input'];
  inputs.forEach((id,i)=>{
    const el = document.getElementById(id);
    if(el) el.value = AI_NAMES[i];
  });
  // Sync win bonus toggle
  const tog = document.getElementById('togRamiWinBonus');
  const desc = document.getElementById('ramiWinModeDesc');
  if(tog){ if(window.ramiWinBonus) tog.classList.add('on'); else tog.classList.remove('on'); }
  if(desc) desc.textContent = window.ramiWinBonus ? 'WINNER GETS -10' : 'WINNER GETS 0';
}

function saveAiNames(){
  const inputs = ['aiName1Input','aiName2Input','aiName3Input'];
  inputs.forEach((id,i)=>{
    const el = document.getElementById(id);
    if(el){
      const v = el.value.trim().toUpperCase().slice(0,10);
      AI_NAMES[i] = v || AI_NAME_DEFAULTS[i];
      el.value = AI_NAMES[i];
    }
  });
  try {
    localStorage.setItem('mw_ai_names', JSON.stringify(AI_NAMES));
    localStorage.setItem('mw_rami_win_bonus', String(!!window.ramiWinBonus));
  } catch(e){}
  showToast('✓ SETTINGS SAVED!');
}

function toggleRamiWinBonus(el){
  sfxClick();
  el.classList.toggle('on');
  window.ramiWinBonus = el.classList.contains('on');
  const desc = document.getElementById('ramiWinModeDesc');
  if(desc) desc.textContent = window.ramiWinBonus ? 'WINNER GETS -10' : 'WINNER GETS 0';
}

// Load on startup
loadAiNames();

// Language translations
const LANG = {
  ar: {
    you: 'أنت', yourTurn: 'دورك!', round: 'جولة', total: 'المجموع',
    reached: 'وصلت إلى', busted: 'خسر!', othersGet: 'الآخرون يحصلون على +1',
    youGet: 'تحصل على +1 نقطة', gameOver: 'انتهت اللعبة', wins: 'يفوز!',
    pts: 'نقاط', easy: 'سهل', medium: 'متوسط', hard: 'صعب',
    rounds: 'الجولات', difficulty: 'صعوبة الذكاء', startGame: 'ابدأ اللعبة',
    sound: '🔊 المؤثرات', language: '🌐 اللغة', music: '🎵 الموسيقى',
    mainMenu: 'القائمة', quitGame: 'إنهاء', throwCard: '✓ ارمِ الورقة',
    rematch: 'إعادة', chooseValue: 'اختر القيمة:', pressPlay: 'ابدأ اللعبة',
    round_banner: 'جولة', voted: 'صوّت', waitingVotes: 'انتظار الأصوات',
    play: 'العب', howToPlay: 'كيف تلعب', multiplayer: 'متعدد اللاعبين',
    settings: 'الإعدادات', drawerGame: 'اللعبة', drawerSound: 'الصوت',
    drawerLang: 'اللغة', finalScores: '★ النتائج النهائية ★',
    youWin: 'أحسنت!'
  },
  fr: {
    you: 'VOUS', yourTurn: 'VOTRE TOUR!', round: 'MANCHE', total: 'TOTAL',
    reached: 'ATTEINT', busted: 'ÉLIMINÉ!', othersGet: 'LES AUTRES +1',
    youGet: 'VOUS GAGNEZ +1', gameOver: 'FIN DE PARTIE', wins: 'GAGNE!',
    pts: 'PTS', easy: 'FACILE', medium: 'MOYEN', hard: 'DIFFICILE',
    rounds: 'MANCHES', difficulty: 'DIFFICULTÉ IA', startGame: 'DÉMARRER',
    sound: '🔊 SON', language: '🌐 LANGUE', music: '🎵 MUSIQUE',
    mainMenu: 'MENU', quitGame: 'QUITTER', throwCard: '✓ JOUER',
    rematch: 'REVANCHE', chooseValue: 'CHOISIR:', pressPlay: 'APPUYEZ JOUER',
    round_banner: 'MANCHE', voted: 'VOTÉ', waitingVotes: 'EN ATTENTE',
    play: 'JOUER', howToPlay: 'RÈGLES', multiplayer: 'MULTIJOUEUR',
    settings: 'RÉGLAGES', drawerGame: 'PARTIE', drawerSound: 'SON',
    drawerLang: 'LANGUE', finalScores: '★ SCORES FINAUX ★',
    youWin: 'BIEN JOUÉ!'
  },
  en: {
    you: 'YOU', yourTurn: 'YOUR TURN!', round: 'ROUND', total: 'TOTAL',
    reached: 'REACHED', busted: 'BUSTED!', othersGet: 'OTHERS GET +1',
    youGet: 'YOU GET +1 POINT', gameOver: 'GAME OVER', wins: 'WINS!',
    pts: 'PTS', easy: 'EASY', medium: 'MEDIUM', hard: 'HARD',
    rounds: 'ROUNDS', difficulty: 'AI DIFFICULTY', startGame: 'START GAME',
    sound: '🔊 SOUND FX', language: '🌐 LANGUAGE', music: '🎵 MUSIC',
    mainMenu: 'MAIN MENU', quitGame: 'QUIT GAME', throwCard: '✓ THROW CARD',
    rematch: 'REMATCH', chooseValue: 'CHOOSE VALUE:', pressPlay: 'PRESS PLAY TO START',
    round_banner: 'ROUND', voted: 'VOTED', waitingVotes: 'WAITING FOR VOTES',
    play: 'PLAY', howToPlay: 'HOW TO PLAY', multiplayer: 'MULTIPLAYER',
    settings: 'SETTINGS', drawerGame: 'GAME', drawerSound: 'SOUND',
    drawerLang: 'LANGUAGE', finalScores: '★ FINAL SCORES ★',
    youWin: "GOT 'EM!"
  }
};

function toggleSetting(el,type){
  sfxClick();
  el.classList.toggle('on');
  if(type==='sound') SFX_ON=el.classList.contains('on');
  if(type==='music'){
    MUSIC_ON=el.classList.contains('on');
    toggleMusic();
    // Keep the menu mute button icon in sync
    const waves = document.getElementById('waveLines');
    const muteX = document.getElementById('muteX');
    const muteIcon = document.getElementById('muteIcon');
    if(waves) waves.style.display = MUSIC_ON ? '' : 'none';
    if(muteX) muteX.style.display = MUSIC_ON ? 'none' : '';
    if(muteIcon) muteIcon.setAttribute('fill', MUSIC_ON ? '#C9A84C' : '#FF4444');
  }
  if(type==='lang'){
    const langs = ['ar','fr','en'];
    const next = langs[(langs.indexOf(currentLang)+1)%3];
    currentLang = next;
    // Update both settings and drawer toggle displays
    ['togLang','dTogLang'].forEach(id=>{
      const tog = document.getElementById(id);
      if(!tog) return;
      const span = tog.querySelector('span');
      if(span) span.textContent = currentLang.toUpperCase();
    });
    updateLanguage();
  }
}

function showRules(game){
  sfxClick();
  const rules51 = document.getElementById('rules51');
  const rulesChkobba = document.getElementById('rulesChkobba');
  const rulesRami = document.getElementById('rulesRami');
  const btn51 = document.getElementById('btnRules51');
  const btnChkobba = document.getElementById('btnRulesChkobba');
  const btnRami = document.getElementById('btnRulesRami');
  
  // Hide all
  if(rules51) rules51.style.display = 'none';
  if(rulesChkobba) rulesChkobba.style.display = 'none';
  if(rulesRami) rulesRami.style.display = 'none';
  
  // Reset all buttons
  if(btn51) { btn51.className = 'px-btn'; btn51.style.background = '#8B6914'; }
  if(btnChkobba) { btnChkobba.className = 'px-btn'; btnChkobba.style.background = '#8B6914'; }
  if(btnRami) { btnRami.className = 'px-btn'; btnRami.style.background = '#6600CC'; }
  
  // Show selected
  if(game === '51'){
    if(rules51) rules51.style.display = '';
    if(btn51) btn51.className = 'px-btn px-btn-green';
  } else if(game === 'rami'){
    if(rulesRami) rulesRami.style.display = '';
    if(btnRami) { btnRami.className = 'px-btn px-btn-green'; btnRami.style.background = ''; }
  } else {
    if(rulesChkobba) rulesChkobba.style.display = '';
    if(btnChkobba) btnChkobba.className = 'px-btn px-btn-green';
  }
}

function updateLanguage(){
  const t = LANG[currentLang];
  const isAr = currentLang === 'ar';
  document.body.style.direction = isAr ? 'rtl' : 'ltr';
  const s = id => document.getElementById(id);

  // ── Menu screen ──
  const subtitles = { ar:'مشكي واعد', fr:'MACHKI WAAWED', en:'MACHKI WAAWED' };
  if(s('menuSubtitle'))   s('menuSubtitle').textContent   = subtitles[currentLang];
  if(s('lblPlay'))        s('lblPlay').textContent        = t.play        || 'PLAY';
  if(s('lblHowToPlay'))   s('lblHowToPlay').textContent   = t.howToPlay   || 'HOW TO PLAY';
  if(s('lblMultiplayer')) s('lblMultiplayer').textContent = t.multiplayer || 'MULTIPLAYER';
  if(s('lblSettings'))    s('lblSettings').textContent    = t.settings    || 'SETTINGS';

  // ── Settings screen ──
  if(s('lblSound'))       s('lblSound').textContent       = t.sound;
  if(s('lblMusic'))       s('lblMusic').textContent       = t.music;
  if(s('lblLanguage'))    s('lblLanguage').textContent    = t.language;

  // ── Game setup screen ──
  if(s('lblRounds'))      s('lblRounds').textContent      = t.rounds;
  if(s('lblDifficulty'))  s('lblDifficulty').textContent  = t.difficulty;
  if(s('lblEasy'))        s('lblEasy').textContent        = t.easy;
  if(s('lblMedium'))      s('lblMedium').textContent      = t.medium;
  if(s('lblHard'))        s('lblHard').textContent        = t.hard;

  // ── Game screen ──
  if(s('lblTotal'))       s('lblTotal').textContent       = t.total;
  if(s('lblThrowCard'))   s('lblThrowCard').textContent   = t.throwCard;
  if(s('choiceLbl'))      s('choiceLbl').textContent      = t.chooseValue;

  // ── Drawer ──
  if(s('lblDrawerGame'))      s('lblDrawerGame').textContent      = t.drawerGame     || 'GAME';
  if(s('lblDrawerRound'))     s('lblDrawerRound').textContent     = t.round;
  if(s('lblDrawerTotal'))     s('lblDrawerTotal').textContent     = t.total;
  if(s('lblDrawerSettings'))  s('lblDrawerSettings').textContent  = t.settings       || 'SETTINGS';
  if(s('lblDrawerSound'))     s('lblDrawerSound').textContent     = t.drawerSound    || 'SOUND';
  if(s('lblDrawerLanguage'))  s('lblDrawerLanguage').textContent  = t.drawerLang     || 'LANGUAGE';
  if(s('lblDrawerMainMenu'))  s('lblDrawerMainMenu').textContent  = '↩ '+t.mainMenu;
  if(s('lblDrawerQuit'))      s('lblDrawerQuit').textContent      = '✕ '+(t.quitGame||'QUIT GAME');

  // ── Gameover screen ──
  if(s('lblGameOver'))    s('lblGameOver').textContent    = t.gameOver;
  if(s('lblFinalScores')) s('lblFinalScores').textContent = t.finalScores  || '★ FINAL SCORES ★';
  if(s('lblMainMenu'))    s('lblMainMenu').textContent    = t.mainMenu;
  if(s('lblRematch'))     s('lblRematch').textContent     = t.rematch;

  // ── Overlays ──
  if(s('ovWinMsg'))       s('ovWinMsg').textContent       = t.youWin       || "GOT 'EM!";
}

function selRound(btn){
  sfxClick();
  document.querySelectorAll('.round-px-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  selectedRounds=parseInt(btn.dataset.v);
}

// Game setup screen handlers
function selSetupRound(btn){
  sfxClick();
  document.querySelectorAll('#gamesetup .round-px-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  selectedRounds=parseInt(btn.dataset.v);
}

function selDifficulty(btn){
  sfxClick();
  document.querySelectorAll('.difficulty-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  selectedDifficulty=btn.dataset.diff;
}

function selMode(btn){
  sfxClick();
  document.querySelectorAll('.mode-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  selectedMode=btn.dataset.mode;
}

let selectedRamiPlayers=2;
let selectedRamiTeams=false; // 2v2 team mode for 4-player Rami

function selRamiPlayers(btn){
  sfxClick();
  document.querySelectorAll('.rami-players-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  selectedRamiPlayers=parseInt(btn.dataset.p);
  // Show/hide team mode toggle
  const teamWrap=document.getElementById('ramiTeamWrap');
  if(teamWrap) teamWrap.style.display = selectedRamiPlayers===4 ? 'flex' : 'none';
}

function toggleRamiTeams(el){
  sfxClick();
  el.classList.toggle('on');
  selectedRamiTeams = el.classList.contains('on');
}

function selRamiOpening(btn){
  sfxClick();
  document.querySelectorAll('.rami-opening-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  window.ramiOpeningMin=parseInt(btn.dataset.v);
}

function selectGame(game){
  sfxClick();
  selectedGame = game;
  
  // Update the badge and title based on selected game
  const badge = document.getElementById('selectedGameName');
  const setupTitle = document.getElementById('gameSetupTitle');
  
  if(game === '51'){
    if(badge) badge.textContent = '✦ MACHKI WAAWED';
    if(setupTitle) setupTitle.textContent = 'MACHKI WAAWED - SETUP';
    const _rtw=document.getElementById('ramiTargetWrap');if(_rtw)_rtw.style.display='none';
    const _rpw=document.getElementById('ramiPlayersWrap');if(_rpw)_rpw.style.display='none';
    const _row=document.getElementById('ramiOpeningWrap');if(_row)_row.style.display='none';
    const _rwb=document.getElementById('ramiWinBonusWrap');if(_rwb)_rwb.style.display='none';
    const _rrs=document.querySelector('#gamesetup .rounds-row');if(_rrs)_rrs.style.display='';
    const _rrl=document.getElementById('lblRounds');if(_rrl)_rrl.style.display='';
  } else if(game === 'rami'){
    if(badge) badge.textContent = '♦ RAMI';
    if(setupTitle) setupTitle.textContent = 'RAMI - SETUP';
    // Show target score + player count + opening threshold + win bonus for Rami, hide rounds
    const ramiTW=document.getElementById('ramiTargetWrap');
    const ramiPW=document.getElementById('ramiPlayersWrap');
    const ramiOW=document.getElementById('ramiOpeningWrap');
    const ramiWB=document.getElementById('ramiWinBonusWrap');
    const roundsSel=document.querySelector('#gamesetup .rounds-row');
    const lblRoundsEl=document.getElementById('lblRounds');
    if(ramiTW)ramiTW.style.display='';
    if(ramiPW)ramiPW.style.display='';
    if(ramiOW)ramiOW.style.display='';
    if(ramiWB)ramiWB.style.display='';
    if(roundsSel)roundsSel.style.display='none';
    if(lblRoundsEl)lblRoundsEl.style.display='none';
    if(!window.ramiTargetScore)window.ramiTargetScore=101;
    if(!window.ramiOpeningMin)window.ramiOpeningMin=51;
    selectedRamiPlayers=2;
    selectedRamiTeams=false;
    document.querySelectorAll('.rami-players-btn').forEach(b=>b.classList.toggle('sel',b.dataset.p==='2'));
    document.querySelectorAll('.rami-opening-btn').forEach(b=>b.classList.toggle('sel',parseInt(b.dataset.v)===(window.ramiOpeningMin||51)));
    // Hide team toggle (only shown when 4 players selected)
    const teamWrap=document.getElementById('ramiTeamWrap');
    if(teamWrap) teamWrap.style.display='none';
    const togTeams=document.getElementById('togRamiTeams');
    if(togTeams) togTeams.classList.remove('on');
  } else {
    if(badge) badge.textContent = '⭐ CHKOBBA';
    if(setupTitle) setupTitle.textContent = 'CHKOBBA - SETUP';
    const _rtw=document.getElementById('ramiTargetWrap');if(_rtw)_rtw.style.display='none';
    const _rpw=document.getElementById('ramiPlayersWrap');if(_rpw)_rpw.style.display='none';
    const _row=document.getElementById('ramiOpeningWrap');if(_row)_row.style.display='none';
    const _rwb=document.getElementById('ramiWinBonusWrap');if(_rwb)_rwb.style.display='none';
  }
  
  // Update rounds label based on game
  const lblRounds = document.getElementById('lblRounds');
  if(lblRounds){
    if(game === 'chkobba'){
      lblRounds.textContent = 'TARGET SCORE';
    } else if(game === 'rami'){
      lblRounds.textContent = 'ROUNDS';
    } else {
      lblRounds.textContent = 'ROUNDS';
    }
  }
  
  // Update round button labels for Chkobba to show target scores
  const roundBtns = document.querySelectorAll('.round-px-btn');
  if(game === 'chkobba'){
    roundBtns.forEach(btn => {
      const val = parseInt(btn.dataset.v);
      btn.textContent = val === 3 ? '11' : val === 5 ? '21' : val === 7 ? '31' : '41';
    });
  } else {
    roundBtns.forEach(btn => {
      btn.textContent = btn.dataset.v;
    });
  }
  
  // Show/hide mode selection (only for Chkobba)
  const modeSelection = document.getElementById('modeSelection');
  if(modeSelection){
    modeSelection.style.display = (game === 'chkobba') ? '' : 'none';
  }
  
  let toastMsg = '✦ MACHKI WAAWED SELECTED';
  if(game === 'chkobba') toastMsg = '⭐ CHKOBBA SELECTED';
  if(game === 'rami') toastMsg = '♦ RAMI SELECTED';
  showToast(toastMsg);
  
  // Go to game setup
  setTimeout(() => goTo('gamesetup'), 100);
}

function showToast(msg){
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = `
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:rgba(0,0,0,0.95);
    color:#FFD700;
    padding:clamp(16px,2.5vh,24px) clamp(24px,4vw,40px);
    font-family:'Press Start 2P',monospace;
    font-size:clamp(10px,1.5vw,16px);
    border:4px solid #FFD700;
    box-shadow:0 0 20px rgba(255,215,0,0.5), 8px 8px 0 rgba(0,0,0,0.8);
    z-index:9999;
    letter-spacing:2px;
    text-align:center;
    pointer-events:none;
    animation:toastPop 0.3s ease-out;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 1500);
}

// ============================================================
// CONFETTI
// ============================================================
function launchConfetti(){
  const c=document.getElementById('confetti');
  c.style.display='block';
  c.width=window.innerWidth;c.height=window.innerHeight;
  const ctx=c.getContext('2d');
  const colors=['#FFD700','#C9A84C','#FF4444','#44FF88','#4488FF','#FFFFFF'];
  const parts=Array.from({length:100},()=>({
    x:Math.random()*c.width,y:-20,
    r:Math.floor(Math.random()*8+4),
    color:colors[Math.floor(Math.random()*colors.length)],
    vx:(Math.random()-0.5)*8,vy:Math.random()*4+2,
    rot:Math.random()*360,vr:Math.random()*10-5,alpha:1
  }));
  let f=0;
  (function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    parts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;
      if(f>60)p.alpha-=0.018;
      ctx.save();ctx.globalAlpha=Math.max(0,p.alpha);
      ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle=p.color;ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r);
      ctx.restore();
    });
    f++;
    if(f<130)requestAnimationFrame(draw);
    else{ctx.clearRect(0,0,c.width,c.height);c.style.display='none';}
  })();
}

// ============================================================
// SCREEN TRANSITIONS
// ============================================================
function goTo(id){
  // Clean up when leaving game screen
  if(id === 'menu' || id === 'gamesetup'){
    // Reset game state
    G = {};
    // Hide all game UIs
    const gameContent = document.getElementById('gameContent');
    const chkobbaUI = document.getElementById('chkobbaUI');
    const ramiUI = document.getElementById('ramiUI');
    if(gameContent) gameContent.style.display = 'none';
    if(chkobbaUI) chkobbaUI.style.display = 'none';
    if(ramiUI) ramiUI.remove();
    // Hide Rami-only pills
    const omp = document.getElementById('openMinPill');
    if(omp) omp.style.display = 'none';
  }
  // Render profile when navigating to it
  if(id === 'auth-profile') renderProfileScreen();
  
  document.querySelectorAll('.screen').forEach(s=>{
    s.classList.remove('active');
    s.style.display='none';
    s.style.opacity='';
    s.style.transition='';
  });
  const el=document.getElementById(id);
  el.style.display='flex';
  el.classList.add('active');
  el.style.opacity='0';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    el.style.transition='opacity 0.3s steps(6)';
    el.style.opacity='1';
  }));
}

// ============================================================
// LOADING SCREEN
// ============================================================
let pct=0;
const loadInterval=setInterval(()=>{
  pct=Math.min(100,pct+Math.floor(Math.random()*12+3));
  document.getElementById('loadPct').textContent='LOADING... '+pct+'%';
  if(pct>=100){
    clearInterval(loadInterval);
    document.getElementById('loadPct').textContent='PRESS START!';
    setTimeout(()=>{
      // Auto-start music
      if(MUSIC_ON && !musicStarted){
        playMusic();
        musicStarted=true;
      }
      // Auth check — non-blocking, runs after bar completes
      authInit().then(restored=>{
        goTo(restored ? 'menu' : 'auth-login');
      }).catch(()=>{
        goTo('auth-login');
      });
    },600);
  }
},120);

// ============================================================
// MENU BUTTONS
// ============================================================
document.getElementById('btnPlay').addEventListener('click',()=>{
  sfxClick();
  goTo('gameselect');
});
document.getElementById('btnMultiplayer').addEventListener('click',()=>{
  sfxClick();
  mpOpen();
});
document.getElementById('btnHowToPlay').addEventListener('click',()=>{
  sfxClick();
  goTo('howtoplayselect');
});

// How to Play game selection buttons
function showHowToPlay51(){
  sfxClick();
  selectedGame = '51';
  document.getElementById('rules51').style.display = '';
  document.getElementById('rulesChkobba').style.display = 'none';
  if(document.getElementById('rulesRami')) document.getElementById('rulesRami').style.display = 'none';
  document.getElementById('howToPlayTitle').textContent = 'HOW TO PLAY - MACHKI WAAWED';
  goTo('howtoplay');
}

function showHowToPlayChkobba(){
  sfxClick();
  selectedGame = 'chkobba';
  document.getElementById('rules51').style.display = 'none';
  document.getElementById('rulesChkobba').style.display = '';
  if(document.getElementById('rulesRami')) document.getElementById('rulesRami').style.display = 'none';
  document.getElementById('howToPlayTitle').textContent = 'HOW TO PLAY - CHKOBBA';
  goTo('howtoplay');
}

function showHowToPlayRami(){
  sfxClick();
  selectedGame = 'rami';
  document.getElementById('rules51').style.display = 'none';
  document.getElementById('rulesChkobba').style.display = 'none';
  if(document.getElementById('rulesRami')) document.getElementById('rulesRami').style.display = '';
  document.getElementById('howToPlayTitle').textContent = 'HOW TO PLAY - RAMI';
  goTo('howtoplay');
}

document.getElementById('btnHowToPlayBack').addEventListener('click',()=>{
  sfxClick();goTo('menu');
});
document.getElementById('btnSettingsBack').addEventListener('click',()=>{
  sfxClick();goTo('menu');
});
document.getElementById('btnSettingsSave').addEventListener('click',()=>{
  sfxCoin();
  saveAiNames();
  goTo('menu');
});
document.getElementById('btnSettings').addEventListener('click',()=>{
  sfxClick();
  // Refresh input fields with current names each time settings opens
  const inputs = ['aiName1Input','aiName2Input','aiName3Input'];
  inputs.forEach((id,i)=>{ const el=document.getElementById(id); if(el) el.value=AI_NAMES[i]; });
  // Sync win bonus toggle state
  const tog=document.getElementById('togRamiWinBonus');
  const desc=document.getElementById('ramiWinModeDesc');
  if(tog){ if(window.ramiWinBonus) tog.classList.add('on'); else tog.classList.remove('on'); }
  if(desc) desc.textContent = window.ramiWinBonus ? 'WINNER GETS -10' : 'WINNER GETS 0';
  goTo('settings');
});
document.getElementById('btnGoMenu').addEventListener('click',()=>{
  sfxClick();
  if (window.MP && MP.active){
    mpLeave();
  } else {
    goTo('menu');
  }
});
document.getElementById('btnStartGame').addEventListener('click',()=>{
  sfxCoin();
  
  // Check which game is selected
  if(selectedGame === 'chkobba'){
    // Start Chkobba game
    initChkobbaGame(selectedRounds, selectedDifficulty);
    return;
  }
  
  if(selectedGame === 'rami'){
    initRamiGame(selectedRounds, selectedDifficulty, selectedRamiPlayers||2, selectedRamiTeams&&selectedRamiPlayers===4);
    return;
  }
  
  // Start 51 game
  initGame(selectedRounds, selectedDifficulty);
});

// Start menu - no custom bg needed, image is embedded
document.getElementById('menu').classList.remove('no-custom-bg');

// ============================================================
// DRAWER
// ============================================================
function openDrawer(){
  sfxClick();
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawerBackdrop').classList.add('show');
  // Hide ROUND and TOTAL for Rami (uses SCORE instead)
  const isRami=G.gameType==='rami';
  const roundRow=document.getElementById('drawerRoundRow');
  const totalRow=document.getElementById('drawerTotalRow');
  if(roundRow)roundRow.style.display=isRami?'none':'flex';
  if(totalRow)totalRow.style.display=isRami?'none':'flex';
  // Update live stats
  if(G.round){
    document.getElementById('drawerRoundInfo').textContent=G.round+'/'+G.totalRounds;
    document.getElementById('drawerTotalInfo').textContent=G.total;
  }
}

function closeDrawer(){
  sfxClick();
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerBackdrop').classList.remove('show');
}

function selRoundDrawer(btn){
  sfxClick();
  document.querySelectorAll('.drb').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  selectedRounds=parseInt(btn.dataset.v);
  // Sync with settings page too
  document.querySelectorAll('.round-px-btn').forEach(b=>{
    b.classList.toggle('sel',parseInt(b.dataset.v)===selectedRounds);
  });
}

// Add hover sounds to all px-btns
document.querySelectorAll('.px-btn,.px-toggle,.round-px-btn,.hdr-btn').forEach(b=>{
  b.addEventListener('mouseenter',()=>sfxHover());
});

// ============================================================
// GAME DATA
// ============================================================
const SUITS=['♥','♦','♣','♠'];
const RANKS=['7','8','9','10','J','Q','K','A'];
const BASE={'7':7,'8':8,'9':0,'10':10,'J':0,'Q':3,'K':4,'A':1};
const HINTS={'9':'=0','10':'±10','J':'REV','Q':'=3','K':'=4','A':'1/11'};

// Chkobba constants
const CHKOBBA_SUITS=['♥','♦','♣','♠'];
const CHKOBBA_RANKS=['A','2','3','4','5','6','7','J','Q','K'];
const CHKOBBA_VALUES={'A':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'J':8,'Q':9,'K':10};

let G={};

function createDeck(){const d=[];SUITS.forEach(s=>RANKS.forEach(r=>d.push({s,r})));return d;}


function shuffle(d){const a=[...d];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function isRed(c){return c.s==='♥'||c.s==='♦';}
function aiVal(c,t){if(c.r==='A')return(t+11>=51)?1:11;if(c.r==='10')return(t>=30)?-10:10;return BASE[c.r]||0;}
function aiBest(hand,t){
  const diff=G.difficulty||'medium';
  
  // EASY: 30% chance of random move
  if(diff==='easy' && Math.random()<0.3){
    return hand[Math.floor(Math.random()*hand.length)];
  }
  
  // MEDIUM & HARD: Smart play
  let safe=hand.filter(c=>t+aiVal(c,t)<51);
  let pool=safe.length>0?safe:hand;
  let best=null,bs=-9999;
  
  pool.forEach(c=>{
    const nv=t+aiVal(c,t);
    let sc=nv>=51?-1000:nv>=45?200+nv:nv>=35?100+nv:nv;
    
    // HARD: Bonus for keeping flexible cards (Ace/10)
    if(diff==='hard'){
      const hasAce=hand.some(cd=>cd.r==='A' && cd!==c);
      const hasTen=hand.some(cd=>cd.r==='10' && cd!==c);
      if((c.r==='A'||c.r==='10') && hand.length>3){
        sc-=50; // Penalty for using flexible cards early
      }
      if(hasAce||hasTen) sc+=20; // Bonus if we keep flexibility
    }
    
    if(sc>bs){bs=sc;best=c;}
  });
  
  return best;
}

// ============================================================
// GAME INIT
// ============================================================
function initGame(rounds, difficulty='medium'){
  // Route to the correct game based on selection
  if(selectedGame === 'chkobba'){
    initChkobbaGame(rounds, difficulty);
  } else {
    init51Game(rounds, difficulty);
  }
}

function init51Game(rounds, difficulty='medium'){
  updateLanguage();
  G={
    gameType: '51',
    totalRounds:rounds,round:0,
    difficulty:difficulty, // Store difficulty
    players:[
      {id:0,name:'YOU',score:0,hand:[],isAI:false},
      {id:1,name:AI_NAMES[0],score:0,hand:[],isAI:true},
      {id:2,name:AI_NAMES[1],score:0,hand:[],isAI:true},
      {id:3,name:AI_NAMES[2],score:0,hand:[],isAI:true},
    ],
    cur:0,total:0,lastCard:null,clockwise:false,
    choosing:null,busy:false,aiActive:false,
    selectedCard:null,  // Track selected card for 2-step throw
  };
  
  goTo('game');
  
  // Force correct header label for 51 (may be left as 'CARDS LEFT:' from Chkobba)
  const hdrLbl = document.getElementById('hdrRoundLabel');
  if(hdrLbl) hdrLbl.textContent = 'ROUND';
  const omp51=document.getElementById('openMinPill');if(omp51)omp51.style.display='none';
  setChatBtnVisible(false); // MSG only for online

  // Show the 51 game's 4-player layout
  const gameContent = document.getElementById('gameContent');
  if(gameContent) gameContent.style.display = '';
  
  // Hide Chkobba UI if it exists
  const chkobbaUI = document.getElementById('chkobbaUI');
  if(chkobbaUI) chkobbaUI.style.display = 'none';
  
  setTimeout(()=>startRound(),400);
}

function initChkobbaGame(rounds, difficulty='medium'){
  updateLanguage();
  
  // Determine if 2v2 teams mode
  const is2v2 = (selectedMode === '2v2');
  
  G={
    gameType: 'chkobba',
    mode: selectedMode, // '1v1' or '2v2'
    totalRounds:rounds,round:0,
    difficulty:difficulty,
    targetScore: rounds === 3 ? 11 : rounds === 5 ? 21 : rounds === 7 ? 31 : 41,
    players: is2v2 ? [
      // 2v2 MODE - 4 players
      {id:0,name:'YOU',score:0,hand:[],captured:[],chkobbas:0,isAI:false,team:1},      // Bottom
      {id:1,name:AI_NAMES[1],score:0,hand:[],captured:[],chkobbas:0,isAI:true,team:2},     // Left
      {id:2,name:AI_NAMES[0],score:0,hand:[],captured:[],chkobbas:0,isAI:true,team:1},      // Top (Partner)
      {id:3,name:AI_NAMES[2],score:0,hand:[],captured:[],chkobbas:0,isAI:true,team:2},     // Right
    ] : [
      // 1v1 MODE - 2 players
      {id:0,name:'YOU',score:0,hand:[],captured:[],chkobbas:0,isAI:false},
      {id:1,name:AI_NAMES[0],score:0,hand:[],captured:[],chkobbas:0,isAI:true},
    ],
    teams: is2v2 ? {
      1: {name:'TEAM 1', score:0, captured:[], chkobbas:0}, // YOU + SAMI
      2: {name:'TEAM 2', score:0, captured:[], chkobbas:0}, // LAYLA + KARIM
    } : null,
    table:[], // Cards on the table
    deck:[], // Remaining deck
    cur:0,
    lastCapture:null, // Track who made last capture
    busy:false,
    aiActive:false,
    selectedCard:null,
    highlightedCapture:null, // Auto-highlighted best capture
  };
  
  goTo('game');
  setChatBtnVisible(false); // MSG only for online
  const ompCk=document.getElementById('openMinPill');if(ompCk)ompCk.style.display='none';
  setTimeout(() => {
    // Hide 51 game's 4-player layout (always)
    const gameContent = document.getElementById('gameContent');
    if(gameContent) gameContent.style.display = 'none';
    
    // Create Chkobba UI (2 or 4 players based on mode)
    if(is2v2){
      create4PlayerChkobbaUI();
    } else {
      createChkobbaUI();
    }
    
    // Start the round after UI is created
    setTimeout(()=>startChkobbaRound(),200);
  }, 100);
}

// ============================================================
// CHKOBBA UI CREATION
// ============================================================

function createChkobbaUI(){
  const gameScreen = document.getElementById('game');
  if(!gameScreen) return;
  
  // Remove old Chkobba UI if exists
  const oldUI = document.getElementById('chkobbaUI');
  if(oldUI) oldUI.remove();
  
  // Create new Chkobba UI container
  const chkobbaUI = document.createElement('div');
  chkobbaUI.id = 'chkobbaUI';
  chkobbaUI.style.cssText = `
    position:absolute;
    inset:0;
    z-index:100;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:clamp(60px,10vh,80px) clamp(20px,5vw,40px) clamp(20px,5vh,40px);
    pointer-events:auto;
  `;
  
  // OPPONENT (TOP)
  const oppZone = document.createElement('div');
  oppZone.style.cssText = `
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:clamp(12px,2vh,20px);
    z-index:101;
  `;
  oppZone.innerHTML = `
    <div style="display:flex;align-items:center;gap:20px;">
      <div style="display:flex;align-items:center;gap:12px;padding:8px 20px;
        background:rgba(0,0,0,0.7);border:3px solid #8B6914;border-radius:8px;">
        <div id="chkobbaOppTurnDot" style="width:10px;height:10px;background:#4CAF50;
          display:none;box-shadow:0 0 8px #4CAF50, inset 0 0 4px rgba(255,255,255,0.5);
          image-rendering:pixelated;border:1px solid #2E7D32;"></div>
        <svg id="chkobbaOppCrown" style="display:none;width:16px;height:16px;filter:drop-shadow(0 0 4px #FFD700);" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="12" width="16" height="4" fill="#FFD700"/>
          <rect x="2" y="8" width="12" height="4" fill="#FFD700"/>
          <rect x="0" y="6" width="4" height="2" fill="#FFD700"/>
          <rect x="6" y="4" width="4" height="4" fill="#FFD700"/>
          <rect x="12" y="6" width="4" height="2" fill="#FFD700"/>
          <rect x="7" y="2" width="2" height="2" fill="#FFD700"/>
          <rect x="2" y="4" width="2" height="2" fill="#FFD700"/>
          <rect x="12" y="4" width="2" height="2" fill="#FFD700"/>
        </svg>
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(10px,1.5vw,14px);
          color:#C9A84C;" id="chkobbaOppName">' + AI_NAMES[0] + '</div>
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(12px,1.8vw,16px);
          color:#FFD700;" id="chkobbaOppPts">0 PTS</div>
      </div>
      <div id="chkobbaOppPile" style="display:flex;align-items:center;gap:8px;padding:6px 16px;
        background:rgba(139,69,19,0.5);border:2px solid #8B4513;border-radius:6px;">
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(9px,1.3vw,13px);
          color:#FFD700;" id="chkobbaOppPileCount">0</div>
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(8px,1.2vw,12px);
          color:#C9A84C;">📚</div>
      </div>
    </div>
    <div id="chkobbaOppCards" style="display:flex;gap:clamp(6px,1vw,10px);
      justify-content:center;flex-wrap:wrap;min-height:80px;"></div>
  `;
  
  // TABLE (MIDDLE)
  const tableZone = document.createElement('div');
  tableZone.style.cssText = `
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:clamp(16px,3vh,24px);
    z-index:101;
  `;
  tableZone.innerHTML = `
    <div id="chkobbaTable" style="display:flex;flex-wrap:wrap;gap:clamp(8px,1.5vw,16px);
      justify-content:center;align-items:center;
      min-height:clamp(100px,15vh,140px);max-width:70%;
      padding:clamp(12px,2vh,20px);
      background:rgba(0,0,0,0.3);border:2px dashed rgba(201,168,76,0.3);
      border-radius:12px;">
    </div>
    <button id="chkobbaThrowBtn" class="px-btn px-btn-green" 
      style="display:none;font-size:clamp(10px,1.4vw,14px);">
      ✓ PLACE ON TABLE
    </button>
  `;
  
  // PLAYER (BOTTOM)
  const playerZone = document.createElement('div');
  playerZone.style.cssText = `
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:clamp(12px,2vh,20px);
    z-index:101;
  `;
  playerZone.innerHTML = `
    <div id="chkobbaPlayerCards" style="display:flex;gap:clamp(8px,1.5vw,12px);
      justify-content:center;flex-wrap:wrap;min-height:100px;"></div>
    <div style="display:flex;align-items:center;gap:20px;">
      <div style="display:flex;align-items:center;gap:12px;padding:8px 20px;
        background:rgba(0,0,0,0.7);border:3px solid #FFD700;border-radius:8px;">
        <div id="chkobbaYouTurnDot" style="width:10px;height:10px;background:#4CAF50;
          display:none;box-shadow:0 0 8px #4CAF50, inset 0 0 4px rgba(255,255,255,0.5);
          image-rendering:pixelated;border:1px solid #2E7D32;"></div>
        <svg id="chkobbaYouCrown" style="display:none;width:16px;height:16px;filter:drop-shadow(0 0 4px #FFD700);" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="12" width="16" height="4" fill="#FFD700"/>
          <rect x="2" y="8" width="12" height="4" fill="#FFD700"/>
          <rect x="0" y="6" width="4" height="2" fill="#FFD700"/>
          <rect x="6" y="4" width="4" height="4" fill="#FFD700"/>
          <rect x="12" y="6" width="4" height="2" fill="#FFD700"/>
          <rect x="7" y="2" width="2" height="2" fill="#FFD700"/>
          <rect x="2" y="4" width="2" height="2" fill="#FFD700"/>
          <rect x="12" y="4" width="2" height="2" fill="#FFD700"/>
        </svg>
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(10px,1.5vw,14px);
          color:#FFD700;">YOU</div>
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(12px,1.8vw,16px);
          color:#FFD700;" id="chkobbaYouPts">0 PTS</div>
      </div>
      <div id="chkobbaYouPile" style="display:flex;align-items:center;gap:8px;padding:6px 16px;
        background:rgba(139,69,19,0.5);border:2px solid #8B4513;border-radius:6px;">
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(9px,1.3vw,13px);
          color:#FFD700;" id="chkobbaYouPileCount">0</div>
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(8px,1.2vw,12px);
          color:#FFD700;">📚</div>
      </div>
    </div>
  `;
  
  chkobbaUI.appendChild(oppZone);
  chkobbaUI.appendChild(tableZone);
  chkobbaUI.appendChild(playerZone);
  
  gameScreen.appendChild(chkobbaUI);
  
  console.log('Chkobba UI created and appended to game screen');
}

// Create 4-player Chkobba UI (for 2v2 teams)
function create4PlayerChkobbaUI(){
  const gameScreen = document.getElementById('game');
  if(!gameScreen) return;
  
  // Remove old Chkobba UI if exists
  const oldUI = document.getElementById('chkobbaUI');
  if(oldUI) oldUI.remove();
  
  // Create new 4-player Chkobba UI container
  const chkobbaUI = document.createElement('div');
  chkobbaUI.id = 'chkobbaUI';
  chkobbaUI.style.cssText = `
    position:absolute;
    inset:0;
    z-index:100;
    display:grid;
    grid-template-areas:
      ". top ."
      "left center right"
      ". bottom .";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr auto;
    padding:clamp(60px,10vh,80px) clamp(20px,3vw,40px) clamp(20px,5vh,40px);
    gap:clamp(12px,2vh,20px);
    pointer-events:auto;
  `;
  
  // TOP PLAYER (SAMI - Partner, Team 1)
  const topZone = document.createElement('div');
  topZone.style.cssText = `
    grid-area:top;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:clamp(8px,1.5vh,12px);
  `;
  topZone.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;">
      <div style="display:flex;align-items:center;gap:8px;padding:6px 16px;
        background:rgba(0,0,0,0.7);border:3px solid #4CAF50;border-radius:8px;">
        <div id="chkobbaTopTurnDot" style="width:10px;height:10px;background:#4CAF50;
          border-radius:50%;display:none;box-shadow:0 0 10px #4CAF50;"></div>
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(9px,1.3vw,12px);
          color:#4CAF50;" id="chkobbaTopName">${AI_NAMES[0]} ★</div>
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(10px,1.5vw,14px);
          color:#FFD700;" id="chkobbaTopPts">0 PTS</div>
      </div>
      <div style="display:none;align-items:center;gap:6px;padding:4px 12px;
        background:rgba(139,69,19,0.5);border:2px solid #8B4513;border-radius:6px;">
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(8px,1.2vw,11px);
          color:#FFD700;" id="chkobbaTopPileCount">0</div>
        <div style="font-size:clamp(8px,1.2vw,11px);">📚</div>
      </div>
    </div>
    <div id="chkobbaTopCards" style="display:flex;gap:6px;justify-content:center;"></div>
  `;
  
  // LEFT PLAYER (LAYLA - Opponent, Team 2)
  const leftZone = document.createElement('div');
  leftZone.style.cssText = `
    grid-area:left;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:clamp(8px,1.5vh,12px);
  `;
  leftZone.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;padding:6px 16px;
      background:rgba(0,0,0,0.7);border:3px solid #F44336;border-radius:8px;">
      <div id="chkobbaLeftTurnDot" style="width:10px;height:10px;background:#4CAF50;
        border-radius:50%;display:none;box-shadow:0 0 10px #4CAF50;"></div>
      <div style="font-family:'Press Start 2P',monospace;font-size:clamp(9px,1.3vw,12px);
        color:#F44336;" id="chkobbaLeftName">${AI_NAMES[1]}</div>
      <div style="font-family:'Press Start 2P',monospace;font-size:clamp(10px,1.5vw,14px);
        color:#FFD700;" id="chkobbaLeftPts">0 PTS</div>
    </div>
    <div style="display:flex;align-items:center;gap:6px;padding:4px 12px;
      background:rgba(139,69,19,0.5);border:2px solid #8B4513;border-radius:6px;">
      <div style="font-family:'Press Start 2P',monospace;font-size:clamp(8px,1.2vw,11px);
        color:#FFD700;" id="chkobbaLeftPileCount">0</div>
      <div style="font-size:clamp(8px,1.2vw,11px);">📚</div>
    </div>
    <div id="chkobbaLeftCards" style="display:flex;flex-direction:column;align-items:center;"></div>
  `;
  
  // RIGHT PLAYER (KARIM - Opponent, Team 2)
  const rightZone = document.createElement('div');
  rightZone.style.cssText = `
    grid-area:right;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:clamp(8px,1.5vh,12px);
  `;
  rightZone.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;padding:6px 16px;
      background:rgba(0,0,0,0.7);border:3px solid #F44336;border-radius:8px;">
      <div id="chkobbaRightTurnDot" style="width:10px;height:10px;background:#4CAF50;
        border-radius:50%;display:none;box-shadow:0 0 10px #4CAF50;"></div>
      <div style="font-family:'Press Start 2P',monospace;font-size:clamp(9px,1.3vw,12px);
        color:#F44336;" id="chkobbaRightName">${AI_NAMES[2]}</div>
      <div style="font-family:'Press Start 2P',monospace;font-size:clamp(10px,1.5vw,14px);
        color:#FFD700;" id="chkobbaRightPts">0 PTS</div>
    </div>
    <div style="display:none;align-items:center;gap:6px;padding:4px 12px;
      background:rgba(139,69,19,0.5);border:2px solid #8B4513;border-radius:6px;">
      <div style="font-family:'Press Start 2P',monospace;font-size:clamp(8px,1.2vw,11px);
        color:#FFD700;" id="chkobbaRightPileCount">0</div>
      <div style="font-size:clamp(8px,1.2vw,11px);">📚</div>
    </div>
    <div id="chkobbaRightCards" style="display:flex;flex-direction:column;align-items:center;"></div>
  `;
  
  // CENTER TABLE
  const centerZone = document.createElement('div');
  centerZone.style.cssText = `
    grid-area:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:clamp(12px,2vh,16px);
  `;
  centerZone.innerHTML = `
    <div id="chkobbaTable" style="display:flex;flex-wrap:wrap;gap:clamp(8px,1.5vw,12px);
      justify-content:center;align-items:center;
      min-height:clamp(100px,15vh,140px);max-width:80%;
      padding:clamp(12px,2vh,20px);
      background:rgba(0,0,0,0.3);border:2px dashed rgba(201,168,76,0.3);
      border-radius:12px;">
    </div>
    <button id="chkobbaThrowBtn" class="px-btn px-btn-green" 
      style="display:none;font-size:clamp(9px,1.3vw,12px);">
      ✓ CAPTURE / PLACE
    </button>
  `;
  
  // BOTTOM PLAYER (YOU - Team 1)
  const bottomZone = document.createElement('div');
  bottomZone.style.cssText = `
    grid-area:bottom;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:clamp(8px,1.5vh,12px);
  `;
  bottomZone.innerHTML = `
    <div id="chkobbaPlayerCards" style="display:flex;gap:clamp(8px,1.5vw,12px);
      justify-content:center;flex-wrap:wrap;min-height:90px;"></div>
    <div style="display:flex;align-items:center;gap:12px;">
      <div style="display:flex;align-items:center;gap:8px;padding:6px 16px;
        background:rgba(0,0,0,0.7);border:3px solid #FFD700;border-radius:8px;">
        <div id="chkobbaYouTurnDot" style="width:10px;height:10px;background:#4CAF50;
          border-radius:50%;display:none;box-shadow:0 0 10px #4CAF50;"></div>
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(9px,1.3vw,12px);
          color:#FFD700;">YOU</div>
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(10px,1.5vw,14px);
          color:#FFD700;" id="chkobbaYouPts">0 PTS</div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;padding:4px 12px;
        background:rgba(139,69,19,0.5);border:2px solid #8B4513;border-radius:6px;">
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(8px,1.2vw,11px);
          color:#FFD700;" id="chkobbaYouPileCount">0</div>
        <div style="font-size:clamp(8px,1.2vw,11px);">📚</div>
      </div>
    </div>
  `;
  
  chkobbaUI.appendChild(topZone);
  chkobbaUI.appendChild(leftZone);
  chkobbaUI.appendChild(centerZone);
  chkobbaUI.appendChild(rightZone);
  chkobbaUI.appendChild(bottomZone);
  
  gameScreen.appendChild(chkobbaUI);
  
  console.log('4-player Chkobba UI created');
}

// ============================================================
// CHKOBBA GAME LOGIC
// ============================================================

// Create 40-card Italian deck (no 8, 9, 10)
function createChkobbaDeck(){
  const suits = ['♥','♦','♣','♠'];
  const ranks = ['A','2','3','4','5','6','7','J','Q','K'];
  const deck = [];
  suits.forEach(s => ranks.forEach(r => deck.push({s, r})));
  return deck;
}

// Get numeric value of a card for Chkobba
function getChkobbaValue(card){
  if(card.r === 'A') return 1;
  if(card.r === 'J') return 8;
  if(card.r === 'Q') return 9;
  if(card.r === 'K') return 10;
  return parseInt(card.r);
}

// Find all possible captures for a given card
// CHKOBBA RULES:
// 1. Can capture a table card with same value (e.g., 5 takes 5)
// 2. Can capture multiple table cards whose sum equals card value (e.g., 5 takes 2+3)
function findCaptures(card, table){
  const cardVal = getChkobbaValue(card);
  const captures = [];
  
  // 1. EXACT MATCH: Find table cards with same value
  table.forEach((tc, idx) => {
    if(getChkobbaValue(tc) === cardVal){
      captures.push({type: 'match', cards: [idx]});
    }
  });
  
  // 2. SUM COMBINATIONS: Find sets of table cards that sum to card value
  const findSums = (target, available, current = [], startIdx = 0) => {
    if(target === 0 && current.length > 0){
      captures.push({type: 'sum', cards: [...current]});
      return;
    }
    if(target < 0) return;
    
    for(let i = startIdx; i < available.length; i++){
      const val = getChkobbaValue(table[available[i]]);
      findSums(target - val, available, [...current, available[i]], i + 1);
    }
  };
  
  const availableIndices = table.map((_, i) => i);
  findSums(cardVal, availableIndices);
  
  return captures;
}

// Get best capture (prefer match over sum, longer sums over shorter)
function getBestCapture(captures){
  if(captures.length === 0) return null;
  
  // Prefer matches
  const matches = captures.filter(c => c.type === 'match');
  if(matches.length > 0) return matches[0];
  
  // Otherwise, longest sum
  return captures.reduce((best, curr) => 
    curr.cards.length > best.cards.length ? curr : best
  );
}

function startChkobbaRound(){
  G.round++;
  G.busy = true;
  G.aiActive = false;
  G.selectedCard = null;
  G.highlightedCapture = null;
  G.lastCapture = null;
  hideOverlays();

  showRoundBanner(G.round, 99, ()=>{
    G.deck = shuffle(createChkobbaDeck());

    // Clear hands and captured piles
    G.players.forEach(p => { p.hand = []; p.captured = []; });

    // Table cards
    G.table = [];
    for(let i = 0; i < 4; i++){
      if(G.deck.length > 0) G.table.push(G.deck.pop());
    }

    G.cur = G.round % 2 === 1 ? 0 : 1;

    // ── GIFT CARD PHASE ──
    // Show one card BEFORE dealing — player chooses keep or skip.
    // If KEPT → counts as 1 of 3, so only 2 more are dealt.
    // If SKIPPED → normal 3 cards dealt. Max hand = always 3.
    const n = G.players.length;
    // FIXED: Proper rotation for 2v2 mode - rotates 0→1→2→3→0...
    const giftSlot = (G.round - 1) % n;
    const giftCard = G.deck.pop();
    G.chkobbaGiftSlot = giftSlot;
    G.chkobbaGiftCard = giftCard;

    if(G.players[giftSlot].isAI){
      // AI: keep if high-value card
      const highCards = ['7','J','Q','K','A'];
      const keeps = highCards.includes(giftCard.r) || Math.random() < 0.45;
      // Deal remaining cards: 2 if kept, 3 if skipped
      const cardsNeeded = keeps ? 2 : 3;
      if(keeps) G.players[giftSlot].hand.push(giftCard);
      G.players.forEach((p, idx) => {
        const count = (idx === giftSlot) ? cardsNeeded : 3;
        for(let i = 0; i < count; i++){
          if(G.deck.length > 0) p.hand.push(G.deck.pop());
        }
      });
      G.chkobbaGiftSlot = -1;
      G.chkobbaGiftCard = null;
      G.busy = false;
      if(G.mode === '2v2') render4PlayerChkobbaGame();
      else renderChkobbaGame();
      if(G.players[G.cur].isAI) scheduleChkobbaAI();
    } else {
      // Human — show gift card modal BEFORE dealing rest of hand
      G.busy = true;
      showChkobbaGiftModal(giftSlot, giftCard);
    }
  });
}

function showChkobbaGiftModal(slot, card){
  const ir = isRed(card);
  const col = ir ? '#CC0000' : '#1a0800';
  const modal = document.createElement('div');
  modal.id = 'chkobbaGiftModal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:5000;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;';

  modal.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:clamp(14px,2.5vh,22px);max-width:90vw;">
      <div style="font-family:'Press Start 2P',monospace;font-size:clamp(10px,1.4vw,14px);color:#C9A84C;letter-spacing:3px;text-align:center;">EXTRA CARD</div>
      <div id="giftCardEl" style="
        background:#FFFCE8;border:5px solid #8B6914;
        padding:clamp(14px,2vh,22px) clamp(18px,2.5vw,28px);
        display:flex;flex-direction:column;align-items:center;gap:6px;
        box-shadow:6px 6px 0 #000;
        transform:translateY(-30px) scale(0.7);opacity:0;
        transition:all 0.4s cubic-bezier(0.22,1,0.36,1);
      ">
        <div style="font-family:'Press Start 2P',monospace;font-size:clamp(28px,5vw,52px);font-weight:bold;color:${col};">${card.r}</div>
        <div style="font-size:clamp(32px,5.5vw,60px);color:${col};">${card.s}</div>
      </div>
      <div style="display:flex;gap:clamp(14px,2.5vw,24px);opacity:0;transition:opacity 0.3s 0.35s;" id="giftBtns">
        <button class="px-btn px-btn-green" style="font-size:clamp(10px,1.3vw,14px);padding:clamp(10px,1.5vh,14px) clamp(20px,3vw,32px);" onclick="chkobbaGiftDecide(true)">KEEP</button>
        <button class="px-btn px-btn-red" style="font-size:clamp(10px,1.3vw,14px);padding:clamp(10px,1.5vh,14px) clamp(20px,3vw,32px);" onclick="chkobbaGiftDecide(false)">SKIP</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  sfxCard();

  // Animate card in, then reveal buttons
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    const cardEl = document.getElementById('giftCardEl');
    const btns = document.getElementById('giftBtns');
    if(cardEl){ cardEl.style.transform='translateY(0) scale(1)'; cardEl.style.opacity='1'; }
    if(btns) btns.style.opacity='1';
  }));
}

function chkobbaGiftDecide(keep){
  sfxClick();
  const modal = document.getElementById('chkobbaGiftModal');
  if(modal) modal.remove();

  const slot = G.chkobbaGiftSlot;
  const giftCard = G.chkobbaGiftCard;

  // Add the gift card first if kept (counts as card #1)
  if(keep && giftCard) G.players[slot].hand.push(giftCard);

  // Deal remaining cards to all players so everyone has exactly 3
  // The gift-slot player gets 2 if kept, 3 if skipped; others always get 3
  G.players.forEach((p, idx) => {
    const need = (idx === slot) ? (keep ? 2 : 3) : 3;
    for(let i = 0; i < need; i++){
      if(G.deck.length > 0) p.hand.push(G.deck.pop());
    }
  });

  if(keep) showToast('✓ CARD KEPT!');

  G.chkobbaGiftSlot = -1;
  G.chkobbaGiftCard = null;
  G.busy = false;
  if(G.mode === '2v2') render4PlayerChkobbaGame();
  else renderChkobbaGame();
  if(G.players[G.cur].isAI) scheduleChkobbaAI();
}

function playChkobbaCard(card, captureIndices = null){
  if(G.busy) return;
  G.busy = true;
  sfxCard();
  
  // Mark for MP snapshot (host-authoritative)
  if(G.mp && MP.isHost) MP.snapshotDirty = true;
  
  const p = G.players[G.cur];
  const cardVal = getChkobbaValue(card);
  
  // Remove card from hand
  const hi = p.hand.findIndex(c => c.r === card.r && c.s === card.s);
  if(hi !== -1) p.hand.splice(hi, 1);
  
  let captured = [];
  let isChkobba = false;
  
  // TRACK LAST MOVE for MP animation (what card was played, what was captured)
  const lastMove = {
    playerSlot: G.cur,
    playerName: p.name,
    playedCard: {r: card.r, s: card.s},
    capturedCards: [],
    wasCapture: false,
    wasChkobba: false,
    wasEl7aya: false,
    timestamp: Date.now()
  };
  
  // CHKOBBA RULE: Player must capture if possible, or throw card to table
  if(captureIndices && captureIndices.length > 0){
    // CAPTURE: Remove table cards that match
    captureIndices.sort((a,b) => b - a);
    captureIndices.forEach(idx => {
      captured.push(G.table[idx]);
      lastMove.capturedCards.push({r: G.table[idx].r, s: G.table[idx].s});
      G.table.splice(idx, 1);
    });
    
    lastMove.wasCapture = true;
    
    // Add played card + captured cards to player's pile
    p.captured.push(card, ...captured);
    G.lastCapture = p.id;
    
    // Check if 7 of diamonds was captured
    const has7ofDiamonds = [card, ...captured].some(c => c.r === '7' && c.s === '♦');
    if(has7ofDiamonds){
      lastMove.wasEl7aya = true;
      showEl7ayaFlash();
      sfxEl7aya();
      if(G.mp) G._showEl7aya = true;
    }
    
    // CHKOBBA RULE: If table is completely cleared, player scores 1 CHKOBBA!
    if(G.table.length === 0){
      p.chkobbas++;
      isChkobba = true;
      lastMove.wasChkobba = true;
      showChkobbaFlash();
      sfxChkobba();
      if(G.mp) G._showChkobba = true;
    } else {
      sfxCapture(); // regular capture sound
    }
    
    setMsg(p.name + ' CAPTURED ' + (captured.length + 1) + ' CARDS' + (isChkobba ? ' ⭐ CHKOBBA!' : '!'));
  } else {
    // THROW: No valid capture - card stays on table
    G.table.push(card);
    setMsg(p.name + ' PLACED ' + card.r + card.s + ' ON TABLE');
  }
  
  // Store last move in game state for MP sync
  if(G.mp){
    G._lastMove = lastMove;
    
    // HOST: Show animation if it was opponent's move
    if(MP.isHost && lastMove.playerSlot !== MP.mySlot){
      showOpponentMoveAnimation(lastMove);
    }
  }
  
  G.selectedCard = null;
  G.highlightedCapture = null;
  
  // MULTIPLAYER: Process synchronously (no setTimeout)
  if(G.mp){
    // Check if round continues or ends
    if(isHandEmpty()){
      if(G.deck.length > 0){
        dealMoreCards();
      } else {
        endChkobbaRound();
        return;
      }
    }
    
    // Next player's turn (host-authoritative)
    G.cur = (G.cur + 1) % G.players.length;
    G.busy = false;
    MP.snapshotDirty = true;
    
    // Render
    if(G.mode === '2v2'){
      render4PlayerChkobbaGame();
    } else {
      renderChkobbaGame();
    }
    return;
  }
  
  // SINGLE PLAYER: Use delays for visual flow
  if(G.mode === '2v2'){
    render4PlayerChkobbaGame();
  } else {
    renderChkobbaGame();
  }
  
  setTimeout(() => {
    if(isHandEmpty()){
      if(G.deck.length > 0){
        dealMoreCards();
      } else {
        endChkobbaRound();
        return;
      }
    }
    
    G.cur = (G.cur + 1) % G.players.length;
    G.busy = false;
    
    if(G.mode === '2v2'){
      render4PlayerChkobbaGame();
    } else {
      renderChkobbaGame();
    }
    
    if(G.players[G.cur].isAI) scheduleChkobbaAI();
  }, isChkobba ? 1500 : 600);
}

// Animated version for AI moves - shows card and capture visually
function playChkobbaCardWithAnimation(card, captureIndices, isAI = false){
  if(G.busy) return;
  G.busy = true;
  
  if(isAI){
    // Show AI's card in center before playing
    showAICardReveal(card, captureIndices, () => {
      // After showing, play the card normally
      playChkobbaCard(card, captureIndices);
    });
  } else {
    // Player moves don't need animation
    playChkobbaCard(card, captureIndices);
  }
}

// Show AI's played card and highlight captures — animates FROM the current player's zone
function showAICardReveal(card, captureIndices, callback){
  const gameScreen = document.getElementById('game');

  // Determine where this player sits in the 4-player layout:
  // 0=YOU(bottom), 1=LAYLA(left), 2=SAMI(top), 3=KARIM(right)
  // In 1v1: 1=opponent(top)
  const cur = G.cur;
  let startTop, startLeft;
  if(G.mode === '2v2'){
    if(cur===0){ startTop='85%'; startLeft='50%'; }       // YOU — bottom
    else if(cur===1){ startTop='50%'; startLeft='10%'; }  // LAYLA — left
    else if(cur===2){ startTop='12%'; startLeft='50%'; }  // SAMI — top
    else { startTop='50%'; startLeft='90%'; }              // KARIM — right
  } else {
    // 1v1: opponent always top
    startTop = (cur===0) ? '85%' : '15%';
    startLeft = '50%';
  }

  const cardReveal = document.createElement('div');
  cardReveal.style.cssText = `
    position:fixed;
    top:${startTop};
    left:${startLeft};
    transform:translate(-50%, -50%) scale(0.5);
    z-index:500;
    opacity:0;
    transition:all 0.4s ease-out;
  `;

  const col = isRed(card) ? 'card-red' : 'card-black';
  cardReveal.innerHTML = `
    <div class="px-card ${col}" style="width:90px;height:126px;">
      <div class="px-card-rank">${card.r}</div>
      <div class="px-card-suit">${card.s}</div>
    </div>
  `;

  gameScreen.appendChild(cardReveal);

  // Animate in — scale up and move toward center
  setTimeout(() => {
    cardReveal.style.transform = 'translate(-50%, -50%) scale(1.2)';
    cardReveal.style.opacity = '1';
    cardReveal.style.top = '42%';
    cardReveal.style.left = '50%';
  }, 50);

  if(captureIndices && captureIndices.length > 0){
    setTimeout(() => {
      renderChkobbaGameWithHighlight(captureIndices);
    }, 400);
  }

  setTimeout(() => {
    cardReveal.style.transform = 'translate(-50%, -50%) scale(0.5)';
    cardReveal.style.opacity = '0';
    setTimeout(() => {
      cardReveal.remove();
      G.busy = false;
      callback();
    }, 400);
  }, 1800);
}

// Render with specific cards highlighted
function renderChkobbaGameWithHighlight(highlightIndices){
  const tableEl = document.getElementById('chkobbaTable');
  if(!tableEl) return;
  
  tableEl.innerHTML = '';
  
  G.table.forEach((card, idx) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'px-card' + (isRed(card) ? ' card-red' : ' card-black');
    
    // Highlight captured cards
    if(highlightIndices.includes(idx)){
      cardEl.style.boxShadow = '0 0 25px #FFD700, 0 0 50px #FFD700';
      cardEl.style.transform = 'translateY(-12px) scale(1.1)';
      cardEl.style.border = '3px solid #FFD700';
    }
    
    cardEl.innerHTML = `
      <div class="px-card-rank">${card.r}</div>
      <div class="px-card-suit">${card.s}</div>
    `;
    cardEl.style.cssText += `
      cursor:pointer;
      transition:all 0.3s;
      width:clamp(50px,7vw,70px);
      height:clamp(70px,10vw,100px);
    `;
    
    tableEl.appendChild(cardEl);
  });
}

function isHandEmpty(){
  return G.players.every(p => p.hand.length === 0);
}

function dealMoreCards(){
  G.busy = true;
  setMsg('DEALING MORE CARDS...');
  
  // MULTIPLAYER: Deal immediately (no setTimeout)
  if(G.mp){
    G.players.forEach(p => {
      for(let i = 0; i < 3 && G.deck.length > 0; i++){
        p.hand.push(G.deck.pop());
      }
    });
    
    G.busy = false;
    MP.snapshotDirty = true;
    
    if(G.mode === '2v2'){
      render4PlayerChkobbaGame();
    } else {
      renderChkobbaGame();
    }
    return;
  }
  
  // SINGLE PLAYER: Use delay for visual flow
  setTimeout(() => {
    G.players.forEach(p => {
      for(let i = 0; i < 3 && G.deck.length > 0; i++){
        p.hand.push(G.deck.pop());
      }
    });
    
    G.busy = false;
    
    if(G.mode === '2v2'){
      render4PlayerChkobbaGame();
    } else {
      renderChkobbaGame();
    }
    
    if(G.players[G.cur].isAI) scheduleChkobbaAI();
  }, 800);
}

function endChkobbaRound(){
  G.busy = true;
  
  // CHKOBBA RULE: Remaining table cards go to the last player who captured
  if(G.table.length > 0 && G.lastCapture !== null){
    const lastPlayer = G.players[G.lastCapture];
    lastPlayer.captured.push(...G.table);
    setMsg(lastPlayer.name + ' GETS REMAINING ' + G.table.length + ' CARDS!');
    G.table = [];
  }
  
  // Calculate round scores based on Chkobba scoring rules
  // (This function now updates G.players scores directly)
  const scores = calculateChkobbaScores();
  
  // Mark for MP snapshot broadcast
  if(G.mp) MP.snapshotDirty = true;
  
  // Render to show updated scores
  if(G.mode === '2v2'){
    render4PlayerChkobbaGame();
  } else {
    renderChkobbaGame();
  }
  
  // Show round results
  setTimeout(() => {
    showChkobbaRoundResults(scores);
    
    // MULTIPLAYER: Send round results to guest
    if(G.mp && MP.isHost){
      mpSendSnapshot({roundResults: JSON.stringify(scores)});
    }
  }, 1000);
}

function calculateChkobbaScores(){
  // CHKOBBA SCORING RULES (Traditional Tunisian scoring):
  // 1. Most cards captured = +1 point
  // 2. Most diamonds (♦) captured = +1 point
  // 3. Seven of Diamonds (7♦) = +1 point
  // 4. Bermila (most 6s+7s combined) = +1 point
  // 5. Each Chkobba (clearing table) = +1 point
  
  if(G.mode === '2v2'){
    // TEAM SCORING - combine teammates' captures
    const team1Cards = [...G.players[0].captured, ...G.players[2].captured]; // YOU + SAMI
    const team2Cards = [...G.players[1].captured, ...G.players[3].captured]; // LAYLA + KARIM
    
    const scores = [
      {
        cards: team1Cards.length,
        diamonds: team1Cards.filter(c => c.s === '♦').length,
        has7ofDiamonds: team1Cards.some(c => c.r === '7' && c.s === '♦'),
        sixes: team1Cards.filter(c => c.r === '6').length,
        sevens: team1Cards.filter(c => c.r === '7').length,
        chkobbas: G.players[0].chkobbas + G.players[2].chkobbas,
        total: 0,
        team: 'TEAM 1 (YOU + '+AI_NAMES[0]+')'
      },
      {
        cards: team2Cards.length,
        diamonds: team2Cards.filter(c => c.s === '♦').length,
        has7ofDiamonds: team2Cards.some(c => c.r === '7' && c.s === '♦'),
        sixes: team2Cards.filter(c => c.r === '6').length,
        sevens: team2Cards.filter(c => c.r === '7').length,
        chkobbas: G.players[1].chkobbas + G.players[3].chkobbas,
        total: 0,
        team: 'TEAM 2 ('+AI_NAMES[1]+' + '+AI_NAMES[2]+')'
      }
    ];
    
    // Most cards = +1
    const maxCards = Math.max(scores[0].cards, scores[1].cards);
    scores.forEach(s => { if(s.cards === maxCards && maxCards > 0) s.total += 1; });
    
    // Most diamonds = +1
    const maxDiamonds = Math.max(scores[0].diamonds, scores[1].diamonds);
    scores.forEach(s => { if(s.diamonds === maxDiamonds && maxDiamonds > 0) s.total += 1; });
    
    // 7 of diamonds = +1
    scores.forEach(s => { if(s.has7ofDiamonds) s.total += 1; });
    
    // Bermila (most 6s+7s) = +1
    scores.forEach(s => { s.bermila = s.sixes + s.sevens; });
    const maxBermila = Math.max(scores[0].bermila, scores[1].bermila);
    scores.forEach(s => { if(s.bermila === maxBermila && s.bermila > 0) s.total += 1; });
    
    // Each chkobba = +1
    scores.forEach(s => { s.total += s.chkobbas; });
    
    // Apply scores to both team members
    G.players[0].score += scores[0].total; // YOU
    G.players[2].score += scores[0].total; // SAMI
    G.players[1].score += scores[1].total; // LAYLA
    G.players[3].score += scores[1].total; // KARIM
    
    return scores;
  } else {
    // 1v1 SCORING - original logic
    const scores = G.players.map(p => ({
      cards: p.captured.length,
      diamonds: p.captured.filter(c => c.s === '♦').length,
      has7ofDiamonds: p.captured.some(c => c.r === '7' && c.s === '♦'),
      sixes: p.captured.filter(c => c.r === '6').length,
      sevens: p.captured.filter(c => c.r === '7').length,
      chkobbas: p.chkobbas,
      total: 0
    }));
    
    // Most cards = +1
    const maxCards = Math.max(...scores.map(s => s.cards));
    scores.forEach(s => { if(s.cards === maxCards && maxCards > 0) s.total += 1; });
    
    // Most diamonds = +1
    const maxDiamonds = Math.max(...scores.map(s => s.diamonds));
    scores.forEach(s => { if(s.diamonds === maxDiamonds && maxDiamonds > 0) s.total += 1; });
    
    // 7 of diamonds = +1
    scores.forEach(s => { if(s.has7ofDiamonds) s.total += 1; });
    
    // Bermila (most 6s+7s) = +1
    scores.forEach(s => { s.bermila = s.sixes + s.sevens; });
    const maxBermila = Math.max(...scores.map(s => s.bermila));
    scores.forEach(s => { if(s.bermila === maxBermila && s.bermila > 0) s.total += 1; });
    
    // Each chkobba = +1
    scores.forEach(s => { s.total += s.chkobbas; });
    
    // Apply scores to players
    G.players.forEach((p, idx) => {
      p.score += scores[idx].total;
    });
    
    return scores;
  }
}

function showChkobbaRoundResults(scores){
  // Build results HTML
  let html = '<div style="font-size:clamp(14px,2vw,20px);color:#FFD700;margin-bottom:20px;letter-spacing:2px;">★ ROUND ' + G.round + ' RESULTS ★</div>';
  
  if(G.mode === '2v2'){
    // Show TEAM results
    scores.forEach((s, idx) => {
      html += '<div style="margin-bottom:24px;padding:16px;background:rgba(0,0,0,0.6);border:3px solid ' + (idx === 0 ? '#4CAF50' : '#F44336') + ';">';
      html += '<div style="font-size:clamp(12px,1.8vw,18px);color:' + (idx === 0 ? '#4CAF50' : '#F44336') + ';margin-bottom:12px;">' + s.team + '</div>';
      html += '<div style="font-size:clamp(9px,1.3vw,13px);line-height:2;color:#FFFCE8;">';
      html += '📇 Cards: ' + s.cards + (s.cards > scores[1-idx].cards ? ' <span style="color:#4CAF50;">+1</span>' : s.cards === scores[1-idx].cards && s.cards > 0 ? ' <span style="color:#FFD700;">+1</span>' : '') + '<br>';
      html += '♦ Diamonds: ' + s.diamonds + (s.diamonds > scores[1-idx].diamonds ? ' <span style="color:#4CAF50;">+1</span>' : s.diamonds === scores[1-idx].diamonds && s.diamonds > 0 ? ' <span style="color:#FFD700;">+1</span>' : '') + '<br>';
      html += '7♦: ' + (s.has7ofDiamonds ? '<span style="color:#4CAF50;">YES +1</span>' : 'NO') + '<br>';
      html += '67 Bermila: ' + s.bermila + (s.bermila > scores[1-idx].bermila ? ' <span style="color:#4CAF50;">+1</span>' : s.bermila === scores[1-idx].bermila && s.bermila > 0 ? ' <span style="color:#FFD700;">+1</span>' : '') + '<br>';
      html += '⭐ Chkobbas: ' + s.chkobbas + (s.chkobbas > 0 ? ' <span style="color:#4CAF50;">+' + s.chkobbas + '</span>' : '') + '<br>';
      html += '<div style="margin-top:8px;padding-top:8px;border-top:2px solid rgba(255,215,0,0.3);font-size:clamp(11px,1.6vw,16px);color:#FFD700;">TOTAL: +' + s.total + ' pts</div>';
      html += '</div></div>';
    });
  } else {
    // Show individual results (1v1)
    G.players.forEach((p, idx) => {
      const s = scores[idx];
      html += '<div style="margin-bottom:24px;padding:16px;background:rgba(0,0,0,0.6);border:3px solid ' + (idx === 0 ? '#FFD700' : '#C9A84C') + ';">';
      html += '<div style="font-size:clamp(12px,1.8vw,18px);color:' + (idx === 0 ? '#FFD700' : '#FFFCE8') + ';margin-bottom:12px;">' + p.name + '</div>';
      html += '<div style="font-size:clamp(9px,1.3vw,13px);line-height:2;color:#FFFCE8;">';
      html += '📇 Cards: ' + s.cards + (s.cards === Math.max(...scores.map(x => x.cards)) ? ' <span style="color:#4CAF50;">+1</span>' : '') + '<br>';
      html += '♦ Diamonds: ' + s.diamonds + (s.diamonds === Math.max(...scores.map(x => x.diamonds)) ? ' <span style="color:#4CAF50;">+1</span>' : '') + '<br>';
      html += '7♦: ' + (s.has7ofDiamonds ? '<span style="color:#4CAF50;">YES +1</span>' : 'NO') + '<br>';
      html += '67 Bermila: ' + s.bermila + (s.bermila === Math.max(...scores.map(x => x.bermila)) && s.bermila > 0 ? ' <span style="color:#4CAF50;">+1</span>' : '') + '<br>';
      html += '⭐ Chkobbas: ' + s.chkobbas + (s.chkobbas > 0 ? ' <span style="color:#4CAF50;">+' + s.chkobbas + '</span>' : '') + '<br>';
      html += '<div style="margin-top:8px;padding-top:8px;border-top:2px solid rgba(255,215,0,0.3);font-size:clamp(11px,1.6vw,16px);color:#FFD700;">TOTAL: +' + s.total + ' pts</div>';
      html += '</div></div>';
    });
  }
  
  html += '<div style="margin-top:20px;font-size:clamp(10px,1.4vw,14px);color:#C9A84C;">TARGET: ' + G.targetScore + ' POINTS</div>';
  
  // Show in overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:1000;
    background:rgba(0,0,0,0.95);
    display:flex;flex-direction:column;
    align-items:center;justify-content:center;
    padding:20px;overflow-y:auto;
  `;
  overlay.innerHTML = html;
  
  const btn = document.createElement('button');
  btn.className = 'px-btn px-btn-green';
  btn.textContent = '✓ CONTINUE';
  btn.style.cssText = 'margin-top:24px;font-size:clamp(11px,1.6vw,16px);padding:clamp(12px,2vh,18px) clamp(20px,3vw,32px);';
  btn.onclick = () => {
    sfxClick();
    document.body.removeChild(overlay);
    
    // MULTIPLAYER: Only host starts next round
    if(G.mp && !MP.isHost) {
      // Guest waits for host to start round (will receive via snapshot)
      return;
    }
    
    // Reset for next round
    G.players.forEach(p => {
      p.hand = [];
      p.captured = [];
      p.chkobbas = 0;
    });
    G.table = [];
    G.lastCapture = null;
    
    // Check if game is over
    const maxScore = Math.max(...G.players.map(p => p.score));
    if(maxScore >= G.targetScore || G.round >= G.totalRounds){
      endChkobbaGame();
    } else {
      startChkobbaRound();
    }
  };
  overlay.appendChild(btn);
  
  document.body.appendChild(overlay);
}

function endChkobbaGame(){
  sfxWin();
  launchConfetti();

  const sorted = [...G.players].sort((a,b) => b.score - a.score);
  const winner = sorted[0];

  // Award XP — was missing from Chkobba entirely
  const mySlotCK = G.mp ? MP.mySlot : 0;
  const iWonCK = sorted[0].id === mySlotCK;
  authAwardXp(iWonCK);

  document.getElementById('goWinner').textContent = '★ ' + winner.name + ' WINS!';
  const sc = document.getElementById('goScores');
  sc.innerHTML = '';
  sorted.forEach(p => {
    const row = document.createElement('div');
    row.className = 'score-row' + (p.id === winner.id ? ' winner-row' : '');
    row.innerHTML = '<div class="sname">' + (p.id === winner.id ? '★ ' : '') + p.name + '</div><div class="spts">' + p.score + ' PTS</div>';
    sc.appendChild(row);
  });

  setTimeout(() => goTo('gameover'), 1000);
}

function showChkobbaFlash(){
  const flash = document.createElement('div');
  flash.textContent = 'CHKOBBA!';
  flash.style.cssText = `
    position:fixed;
    top:50%;left:50%;
    transform:translate(-50%,-50%);
    font-family:'Press Start 2P',monospace;
    font-size:clamp(20px,4vw,40px);
    color:#FFD700;
    text-shadow:4px 4px 0 #000, 0 0 20px #FFD700;
    z-index:999;
    animation:chkobbaFlash 1.2s ease-out;
    pointer-events:none;
    letter-spacing:3px;
  `;
  document.body.appendChild(flash);
  sfxCoin();
  setTimeout(() => flash.remove(), 1200);
}

function showEl7ayaFlash(){
  const flash = document.createElement('div');
  flash.textContent = 'EL 7AYA!';
  flash.style.cssText = `
    position:fixed;
    top:50%;left:50%;
    transform:translate(-50%,-50%);
    font-family:'Press Start 2P',monospace;
    font-size:clamp(20px,4vw,40px);
    color:#FF4444;
    text-shadow:4px 4px 0 #000, 0 0 30px #FF4444, 0 0 60px #FFD700;
    z-index:999;
    animation:el7ayaFlash 1.5s ease-out;
    pointer-events:none;
    letter-spacing:3px;
  `;
  document.body.appendChild(flash);
  sfxCoin();
  setTimeout(() => flash.remove(), 1500);
}

function showTimerEndedAnimation(){
  // Red screen flash
  const flashScreen = document.createElement('div');
  flashScreen.style.cssText = `
    position:fixed;
    top:0;left:0;right:0;bottom:0;
    background:#CC0000;
    z-index:9998;
    animation:timerFlash 1.5s ease-out;
    pointer-events:none;
  `;
  document.body.appendChild(flashScreen);
  setTimeout(() => flashScreen.remove(), 1500);
  
  // "TIMER ENDED" text with pulsing
  const text = document.createElement('div');
  text.textContent = 'TIMER ENDED';
  text.style.cssText = `
    position:fixed;
    top:50%;left:50%;
    transform:translate(-50%,-50%);
    font-family:'Press Start 2P',monospace;
    font-size:clamp(16px,3.5vw,36px);
    color:#FFFCE8;
    text-shadow:
      4px 4px 0 #000,
      0 0 20px #CC0000,
      0 0 40px #CC0000,
      0 0 60px #FF0000;
    z-index:9999;
    animation:timerTextPulse 1.5s ease-in-out;
    pointer-events:none;
    letter-spacing:2px;
    text-align:center;
  `;
  document.body.appendChild(text);
  setTimeout(() => text.remove(), 1500);
}

function createCardHTML(card, size = 'normal'){
  const isRedCard = (card.s === '♥' || card.s === '♦');
  const cardColor = isRedCard ? '#CC0000' : '#000';
  const borderColor = isRedCard ? '#CC0000' : '#000';
  
  if(size === 'small'){
    return `
      <div style="
        display:inline-block;
        background:#FFFCE8;
        border:2px solid ${borderColor};
        border-radius:4px;
        padding:4px 8px;
        box-shadow:2px 2px 0 rgba(0,0,0,0.3);
        font-family:'Press Start 2P',monospace;
        image-rendering:pixelated;
      ">
        <div style="font-size:12px;color:${cardColor};line-height:1.2;">
          ${card.r}
        </div>
        <div style="font-size:14px;color:${cardColor};margin-top:2px;">
          ${card.s}
        </div>
      </div>
    `;
  }
  
  // Normal size
  return `
    <div style="
      display:inline-block;
      background:#FFFCE8;
      border:3px solid ${borderColor};
      border-radius:6px;
      padding:6px 12px;
      box-shadow:3px 3px 0 rgba(0,0,0,0.4);
      font-family:'Press Start 2P',monospace;
      image-rendering:pixelated;
    ">
      <div style="font-size:16px;color:${cardColor};line-height:1.2;">
        ${card.r}
      </div>
      <div style="font-size:18px;color:${cardColor};margin-top:4px;">
        ${card.s}
      </div>
    </div>
  `;
}

function showOpponentMoveAnimation(move){
  // move = {playerSlot, playerName, playedCard, capturedCards, wasCapture, wasChkobba, wasEl7aya}
  
  // Create panel that drops down from top
  const panel = document.createElement('div');
  panel.style.cssText = `
    position:fixed;
    top:80px;
    left:50%;
    transform:translateX(-50%);
    background:rgba(13,13,13,0.95);
    border:4px solid #FFD700;
    padding:16px 24px;
    border-radius:8px;
    z-index:9990;
    font-family:'Press Start 2P',monospace;
    font-size:clamp(10px,2vw,14px);
    color:#FFFCE8;
    box-shadow:
      4px 4px 0 rgba(0,0,0,0.5),
      0 0 20px rgba(255,215,0,0.3);
    animation:dropFromTop 0.5s ease-out;
    pointer-events:none;
    max-width:500px;
  `;
  
  let html = `<div style="margin-bottom:12px;color:#FFD700;text-align:center;font-size:12px;">${move.playerName}'S MOVE</div>`;
  
  // Show played card with visual
  html += `<div style="margin-bottom:12px;text-align:center;">
    <div style="color:#AAA;font-size:9px;margin-bottom:6px;">PLAYED</div>
    ${createCardHTML(move.playedCard, 'normal')}
  </div>`;
  
  // Show captured cards if any
  if(move.wasCapture && move.capturedCards.length > 0){
    html += `<div style="margin-top:12px;text-align:center;">
      <div style="color:#AAA;font-size:9px;margin-bottom:6px;">CAPTURED</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;">`;
    
    move.capturedCards.forEach(card => {
      html += createCardHTML(card, 'small');
    });
    
    html += `</div></div>`;
  }
  
  // Show special achievements
  if(move.wasChkobba){
    html += `<div style="margin-top:12px;text-align:center;color:#FFD700;font-size:11px;">⭐ CHKOBBA! ⭐</div>`;
  }
  if(move.wasEl7aya){
    html += `<div style="margin-top:8px;text-align:center;color:#FF4444;font-size:11px;">💎 EL 7AYA! 💎</div>`;
  }
  
  panel.innerHTML = html;
  document.body.appendChild(panel);
  
  // Auto-remove after 2.5 seconds
  setTimeout(() => {
    panel.style.animation = 'fadeOutUp 0.4s ease-in';
    setTimeout(() => panel.remove(), 400);
  }, 2500);
}

function scheduleChkobbaAI(){
  if(!G.players[G.cur].isAI || G.busy) return;
  G.aiActive = true;
  
  setTimeout(() => {
    const p = G.players[G.cur];
    const bestMove = getChkobbaAIMove(p.hand, G.table, G.difficulty);
    
    // Show AI's card and animate capture
    if(bestMove.capture){
      playChkobbaCardWithAnimation(bestMove.card, bestMove.capture.cards, true);
    } else {
      playChkobbaCardWithAnimation(bestMove.card, null, true);
    }
    
    G.aiActive = false;
  }, 800);
}

function getChkobbaAIMove(hand, table, difficulty){
  // Easy: Random move
  if(difficulty === 'easy' && Math.random() < 0.4){
    const card = hand[Math.floor(Math.random() * hand.length)];
    const captures = findCaptures(card, table);
    const capture = captures.length > 0 ? getBestCapture(captures) : null;
    return {card, capture};
  }
  
  // Medium & Hard: Smart play
  let bestCard = null;
  let bestCapture = null;
  let bestScore = -9999;
  
  hand.forEach(card => {
    const captures = findCaptures(card, table);
    
    if(captures.length > 0){
      const capture = getBestCapture(captures);
      let score = capture.cards.length * 10;
      
      // Bonus for clearing table (chkobba)
      if(capture.cards.length === table.length){
        score += 100;
      }
      
      // Bonus for capturing diamonds
      capture.cards.forEach(idx => {
        if(table[idx].s === '♦') score += 5;
        if(table[idx].r === '7' && table[idx].s === '♦') score += 20;
        if(table[idx].r === '6' || table[idx].r === '7') score += 3;
      });
      
      if(score > bestScore){
        bestScore = score;
        bestCard = card;
        bestCapture = capture;
      }
    } else {
      // No capture - place lowest value card
      const cardVal = getChkobbaValue(card);
      const score = -cardVal;
      if(score > bestScore){
        bestScore = score;
        bestCard = card;
        bestCapture = null;
      }
    }
  });
  
  return {card: bestCard, capture: bestCapture};
}

function renderChkobbaGame(){
  // Update cards left in deck indicator
  const cardsLeft = G.deck ? G.deck.length : 0;
  const hdrRound = document.getElementById('hdrRound');
  const hdrLabel = document.getElementById('hdrRoundLabel');
  if(hdrRound) hdrRound.textContent = cardsLeft;
  if(hdrLabel) hdrLabel.textContent = 'CARDS LEFT:';
  
  // In multiplayer, use MP.mySlot to determine which player is ME
  const mySlot = G.mp ? MP.mySlot : 0;
  const oppSlot = mySlot === 0 ? 1 : 0;
  
  const myPlayer = G.players[mySlot];
  const oppPlayer = G.players[oppSlot];
  
  // Update scores
  document.getElementById('chkobbaYouPts').textContent = myPlayer.score + ' PTS';
  document.getElementById('chkobbaOppPts').textContent = oppPlayer.score + ' PTS';
  document.getElementById('chkobbaOppName').textContent = oppPlayer.name;
  
  // Show crown beside host (slot 0 is always host)
  const youCrown = document.getElementById('chkobbaYouCrown');
  const oppCrown = document.getElementById('chkobbaOppCrown');
  if(G.mp){
    if(youCrown) youCrown.style.display = (mySlot === 0) ? '' : 'none';
    if(oppCrown) oppCrown.style.display = (oppSlot === 0) ? '' : 'none';
  } else {
    if(youCrown) youCrown.style.display = 'none';
    if(oppCrown) oppCrown.style.display = 'none';
  }
  
  // Update turn indicators (green dots)
  const youDot = document.getElementById('chkobbaYouTurnDot');
  const oppDot = document.getElementById('chkobbaOppTurnDot');
  if(youDot) youDot.style.display = (G.cur === mySlot) ? '' : 'none';
  if(oppDot) oppDot.style.display = (G.cur === oppSlot) ? '' : 'none';
  
  // Update captured card piles
  const youPileEl = document.getElementById('chkobbaYouPileCount');
  const oppPileEl = document.getElementById('chkobbaOppPileCount');
  if(youPileEl) youPileEl.textContent = myPlayer.captured.length;
  if(oppPileEl) oppPileEl.textContent = oppPlayer.captured.length;
  
  // Render table cards
  const tableEl = document.getElementById('chkobbaTable');
  if(!tableEl) return;
  
  tableEl.innerHTML = '';
  
  if(G.table.length === 0){
    tableEl.innerHTML = '<div style="color:rgba(201,168,76,0.3);font-size:clamp(10px,1.5vw,14px);font-family:\'Press Start 2P\',monospace;">EMPTY TABLE</div>';
  } else {
    G.table.forEach((card, idx) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'px-card' + (isRed(card) ? ' card-red' : ' card-black');
      
      // Highlight if part of selected capture
      const isHighlighted = G.highlightedCapture && G.highlightedCapture.cards.includes(idx);
      if(isHighlighted){
        cardEl.style.boxShadow = '0 0 20px #FFD700, 0 0 40px #FFD700';
        cardEl.style.transform = 'translateY(-8px) scale(1.05)';
      }
      
      cardEl.innerHTML = `
        <div class="px-card-rank">${card.r}</div>
        <div class="px-card-suit">${card.s}</div>
      `;
      cardEl.style.cssText += `
        cursor:pointer;
        transition:all 0.2s;
        width:clamp(50px,7vw,70px);
        height:clamp(70px,10vw,100px);
      `;
      
      // Allow clicking table cards to manually select capture
      const mySlot = G.mp ? MP.mySlot : 0;
      if(G.cur === mySlot && !G.busy && G.selectedCard){
        cardEl.onclick = () => toggleTableCardSelection(idx);
      }
      
      tableEl.appendChild(cardEl);
    });
  }
  
  // Render YOUR hand
  const handEl = document.getElementById('chkobbaPlayerCards');
  if(!handEl) return;
  
  handEl.innerHTML = '';
  
  console.log('Rendering your hand:', myPlayer.hand.length, 'cards');
  console.log('G.cur:', G.cur, 'G.busy:', G.busy, 'G.aiActive:', G.aiActive);
  
  myPlayer.hand.forEach((card, cardIdx) => {
    const cardEl = document.createElement('div');
    cardEl.style.cssText = `
      position:relative;
      cursor:pointer;
      transition:all 0.3s;
      pointer-events:auto;
    `;
    
    const selected = G.selectedCard && G.selectedCard.r === card.r && G.selectedCard.s === card.s;
    if(selected){
      cardEl.style.transform = 'translateY(-20px)';
      cardEl.style.filter = 'brightness(1.3)';
    }
    
    const col = isRed(card) ? 'card-red' : 'card-black';
    cardEl.innerHTML = `
      <div class="px-card ${col}" style="width:clamp(60px,9vw,90px);height:clamp(84px,12.6vw,126px);">
        <div class="px-card-rank">${card.r}</div>
        <div class="px-card-suit">${card.s}</div>
      </div>
    `;
    
    // ALWAYS attach click handler (we'll check conditions inside the function)
    cardEl.onclick = () => {
      console.log('Card clicked:', card.r + card.s, 'cur:', G.cur, 'busy:', G.busy);
      selectChkobbaCard(card);
    };
    
    handEl.appendChild(cardEl);
  });
  
  // Render OPPONENT's cards (back only, count)
  const oppHandEl = document.getElementById('chkobbaOppCards');
  if(!oppHandEl) return;
  
  oppHandEl.innerHTML = '';
  
  oppPlayer.hand.forEach(() => {
    const cardEl = document.createElement('div');
    cardEl.className = 'px-card card-back';
    cardEl.style.cssText = `
      width:clamp(50px,7vw,70px);
      height:clamp(70px,10vw,100px);
    `;
    cardEl.innerHTML = `
      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;
        font-size:clamp(20px,3vw,30px);color:rgba(201,168,76,0.3);">?</div>
    `;
    oppHandEl.appendChild(cardEl);
  });
  
  // Update throw/capture button
  updateChkobbaThrowButton();
}

// Render 4-player Chkobba game (2v2 teams)
function render4PlayerChkobbaGame(){
  // Update cards left
  const cardsLeft = G.deck ? G.deck.length : 0;
  const hdrRound = document.getElementById('hdrRound');
  const hdrLabel = document.getElementById('hdrRoundLabel');
  if(hdrRound) hdrRound.textContent = cardsLeft;
  if(hdrLabel) hdrLabel.textContent = 'CARDS LEFT:';
  
  // Players: 0=YOU(bottom), 1=LAYLA(left), 2=SAMI(top), 3=KARIM(right)
  const you = G.players[0];
  const layla = G.players[1];
  const sami = G.players[2];
  const karim = G.players[3];
  
  // Update turn indicators (green dots)
  const youDot = document.getElementById('chkobbaYouTurnDot');
  const leftDot = document.getElementById('chkobbaLeftTurnDot');
  const topDot = document.getElementById('chkobbaTopTurnDot');
  const rightDot = document.getElementById('chkobbaRightTurnDot');
  if(youDot) youDot.style.display = (G.cur === 0) ? '' : 'none';
  if(leftDot) leftDot.style.display = (G.cur === 1) ? '' : 'none';
  if(topDot) topDot.style.display = (G.cur === 2) ? '' : 'none';
  if(rightDot) rightDot.style.display = (G.cur === 3) ? '' : 'none';
  
  // Update scores and pile counts
  document.getElementById('chkobbaYouPts').textContent = you.score + ' PTS';
  document.getElementById('chkobbaLeftPts').textContent = layla.score + ' PTS';
  document.getElementById('chkobbaTopPts').textContent = sami.score + ' PTS';
  document.getElementById('chkobbaRightPts').textContent = karim.score + ' PTS';
  
  // TEAM pile counts (only 2 visible - YOU and LAYLA)
  const team1Total = you.captured.length + sami.captured.length;
  const team2Total = layla.captured.length + karim.captured.length;
  
  document.getElementById('chkobbaYouPileCount').textContent = team1Total; // Team 1 total
  document.getElementById('chkobbaLeftPileCount').textContent = team2Total; // Team 2 total
  
  // Render YOUR hand (bottom)
  const yourHandEl = document.getElementById('chkobbaPlayerCards');
  yourHandEl.innerHTML = '';
  you.hand.forEach(card => {
    const cardEl = document.createElement('div');
    const selected = G.selectedCard && G.selectedCard.r === card.r && G.selectedCard.s === card.s;
    const col = isRed(card) ? 'card-red' : 'card-black';
    cardEl.style.cssText = `
      position:relative;
      transition:transform 0.2s;
      cursor:pointer;
      ${selected ? 'transform:translateY(-12px);' : ''}
    `;
    cardEl.innerHTML = `
      <div class="px-card ${col}" style="width:clamp(50px,7vw,70px);height:clamp(70px,10vw,100px);pointer-events:none;">
        <div class="px-card-rank">${card.r}</div>
        <div class="px-card-suit">${card.s}</div>
      </div>
    `;
    cardEl.onclick = () => {
      console.log('Card clicked!', card.r + card.s);
      selectChkobbaCard(card);
    };
    yourHandEl.appendChild(cardEl);
  });
  
  // Render TABLE cards
  const tableEl = document.getElementById('chkobbaTable');
  tableEl.innerHTML = '';
  G.table.forEach((card, idx) => {
    const cardEl = document.createElement('div');
    const col = isRed(card) ? 'card-red' : 'card-black';
    const isHighlighted = G.highlightedCapture && G.highlightedCapture.cards.includes(idx);
    cardEl.style.cssText = `
      cursor:pointer;
      ${isHighlighted ? 'box-shadow:0 0 15px #FFD700;' : ''}
    `;
    cardEl.innerHTML = `
      <div class="px-card ${col}" style="width:clamp(45px,6vw,60px);height:clamp(63px,8.4vw,84px);pointer-events:none;">
        <div class="px-card-rank">${card.r}</div>
        <div class="px-card-suit">${card.s}</div>
      </div>
    `;
    cardEl.onclick = () => {
      console.log('Table card clicked!', idx);
      toggleTableCardSelection(idx);
    };
    tableEl.appendChild(cardEl);
  });
  
  // Render opponent hands (card backs)
  render4PlayerOppCards(layla, 'chkobbaLeftCards');
  render4PlayerOppCards(sami, 'chkobbaTopCards');
  render4PlayerOppCards(karim, 'chkobbaRightCards');
  
  // Update throw button
  updateChkobbaThrowButton();
}

function render4PlayerOppCards(player, elementId){
  const oppEl = document.getElementById(elementId);
  if(!oppEl) return;
  
  oppEl.innerHTML = '';
  
  // Determine rotation and margin based on position
  let rotation = '0deg';
  let useVerticalMargin = false;
  
  // SAMI (top) - horizontal, no rotation, no margin
  if(elementId === 'chkobbaTopCards'){
    rotation = '0deg';
    useVerticalMargin = false;
  }
  // LAYLA (left) - vertical stack, rotated
  if(elementId === 'chkobbaLeftCards'){
    rotation = '90deg';
    useVerticalMargin = true;
  }
  // KARIM (right) - vertical stack, rotated
  if(elementId === 'chkobbaRightCards'){
    rotation = '-90deg';
    useVerticalMargin = true;
  }
  
  player.hand.forEach((_, idx) => {
    const cardEl = document.createElement('div');
    cardEl.style.cssText = `
      width:clamp(40px,5.5vw,55px);
      height:clamp(56px,7.7vw,77px);
      background:#fff;
      border:2px solid #333;
      border-radius:4px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:clamp(18px,2.5vw,24px);
      color:rgba(0,0,0,0.2);
      transform:rotate(${rotation});
      ${useVerticalMargin && idx > 0 ? 'margin-top:-35px;' : ''}
    `;
    cardEl.innerHTML = '?';
    oppEl.appendChild(cardEl);
  });
}

function selectChkobbaCard(card){
  console.log('=== selectChkobbaCard called ===');
  console.log('Card:', card.r + card.s);
  console.log('G.busy:', G.busy);
  console.log('G.cur:', G.cur);
  console.log('isAI:', G.players[G.cur].isAI);
  console.log('Current player:', G.players[G.cur].name);
  
  // Use mySlot in multiplayer
  const mySlot = G.mp ? MP.mySlot : 0;
  
  if(G.busy || G.players[G.cur].isAI || G.cur !== mySlot) {
    console.log('Selection BLOCKED');
    return;
  }
  
  sfxHover();
  
  // Toggle selection
  if(G.selectedCard && G.selectedCard.r === card.r && G.selectedCard.s === card.s){
    console.log('Deselecting card');
    G.selectedCard = null;
    G.highlightedCapture = null;
  } else {
    console.log('Selecting card:', card.r + card.s);
    G.selectedCard = card;
    
    // Auto-highlight best capture
    const captures = findCaptures(card, G.table);
    console.log('Found', captures.length, 'possible captures');
    if(captures.length > 0){
      G.highlightedCapture = getBestCapture(captures);
      console.log('Best capture:', G.highlightedCapture);
    } else {
      G.highlightedCapture = null;
    }
  }
  
  // Render appropriate UI
  if(G.mode === '2v2'){
    render4PlayerChkobbaGame();
  } else {
    renderChkobbaGame();
  }
}

function toggleTableCardSelection(idx){
  const mySlot = G.mp ? MP.mySlot : 0;
  if(!G.selectedCard || G.busy || G.players[G.cur].isAI || G.cur !== mySlot) return;
  
  sfxClick();
  
  // Manual capture selection - toggle card in/out
  if(!G.highlightedCapture){
    G.highlightedCapture = {type: 'manual', cards: []};
  }
  
  const cardIdx = G.highlightedCapture.cards.indexOf(idx);
  if(cardIdx !== -1){
    // Remove from selection
    G.highlightedCapture.cards.splice(cardIdx, 1);
  } else {
    // Add to selection
    G.highlightedCapture.cards.push(idx);
  }
  
  // Validate: Check if selected cards sum equals card value
  if(G.highlightedCapture.cards.length > 0){
    const cardVal = getChkobbaValue(G.selectedCard);
    const selectedSum = G.highlightedCapture.cards.reduce((sum, i) => {
      return sum + getChkobbaValue(G.table[i]);
    }, 0);
    
    // If sum doesn't match, highlight invalid selection
    G.highlightedCapture.isValid = (selectedSum === cardVal);
  } else {
    G.highlightedCapture.isValid = true;
  }
  
  renderChkobbaGame();
}

function updateChkobbaThrowButton(){
  const btn = document.getElementById('chkobbaThrowBtn');
  if(!btn) return;
  
  const mySlot = G.mp ? MP.mySlot : 0;
  const myTurn = G.cur === mySlot && !G.busy && !G.aiActive;
  
  if(!myTurn || !G.selectedCard){
    btn.style.display = 'none';
    return;
  }
  
  btn.style.display = '';
  
  if(G.highlightedCapture && G.highlightedCapture.cards.length > 0){
    // Check if capture is valid (sum matches card value)
    const isValid = G.highlightedCapture.isValid !== false;
    
    if(isValid){
      btn.textContent = '✓ CAPTURE ' + (G.highlightedCapture.cards.length + 1) + ' CARDS';
      btn.className = 'px-btn px-btn-green';
      btn.disabled = false;
      btn.onclick = () => {
        if(G.selectedCard && G.highlightedCapture){
          sfxClick();
          if(G.mp){
            if(MP.isHost){
              // Host queues directly
              MP.inputQueue.push({
                slot: MP.mySlot,
                card: G.selectedCard,
                captureIndices: G.highlightedCapture.cards,
                tick: MP.seqOut
              });
            } else {
              // Guest sends to host
              mpSend('input',{
                slot: MP.mySlot,
                card: G.selectedCard,
                captureIndices: G.highlightedCapture.cards,
                tick: MP.seqOut
              });
            }
            // Clear selection for UI responsiveness
            G.selectedCard = null;
            G.highlightedCapture = null;
            renderChkobbaGame();
          } else {
            // Single player - execute directly
            playChkobbaCard(G.selectedCard, G.highlightedCapture.cards);
          }
        }
      };
    } else {
      btn.textContent = '✗ INVALID CAPTURE';
      btn.className = 'px-btn px-btn-red';
      btn.disabled = true;
      btn.onclick = null;
    }
  } else {
    btn.textContent = '✓ PLACE ON TABLE';
    btn.className = 'px-btn px-btn-green';
    btn.disabled = false;
    btn.onclick = () => {
      if(G.selectedCard){
        sfxClick();
        if(G.mp){
          if(MP.isHost){
            // Host queues directly
            MP.inputQueue.push({
              slot: MP.mySlot,
              card: G.selectedCard,
              captureIndices: null,
              tick: MP.seqOut
            });
          } else {
            // Guest sends to host
            mpSend('input',{
              slot: MP.mySlot,
              card: G.selectedCard,
              captureIndices: null,
              tick: MP.seqOut
            });
          }
          // Clear selection for UI responsiveness
          G.selectedCard = null;
          G.highlightedCapture = null;
          renderChkobbaGame();
        } else {
          // Single player - execute directly
          playChkobbaCard(G.selectedCard, null);
        }
      }
    };
  }
}

// Add Chkobba flash animation to CSS
if(!document.querySelector('#chkobbaFlashStyle')){
  const style = document.createElement('style');
  style.id = 'chkobbaFlashStyle';
  style.textContent = `
    @keyframes chkobbaFlash {
      0% { transform:translate(-50%,-50%) scale(0.5); opacity:0; }
      50% { transform:translate(-50%,-50%) scale(1.2); opacity:1; }
      100% { transform:translate(-50%,-50%) scale(1); opacity:0; }
    }
    @keyframes el7ayaFlash {
      0% { transform:translate(-50%,-50%) scale(0.3) rotate(-5deg); opacity:0; }
      30% { transform:translate(-50%,-50%) scale(1.3) rotate(5deg); opacity:1; }
      50% { transform:translate(-50%,-50%) scale(1.1) rotate(-3deg); opacity:1; }
      70% { transform:translate(-50%,-50%) scale(1.2) rotate(2deg); opacity:1; }
      100% { transform:translate(-50%,-50%) scale(1) rotate(0deg); opacity:0; }
    }
    @keyframes timerFlash {
      0% { opacity:0.7; }
      50% { opacity:0.4; }
      100% { opacity:0; }
    }
    @keyframes timerTextPulse {
      0% { transform:translate(-50%,-50%) scale(0.5); opacity:0; }
      30% { transform:translate(-50%,-50%) scale(1.2); opacity:1; }
      50% { transform:translate(-50%,-50%) scale(0.9); opacity:1; }
      70% { transform:translate(-50%,-50%) scale(1.1); opacity:1; }
      100% { transform:translate(-50%,-50%) scale(1); opacity:0; }
    }
    @keyframes dropFromTop {
      0% { transform:translateX(-50%) translateY(-150px); opacity:0; }
      100% { transform:translateX(-50%) translateY(0); opacity:1; }
    }
    @keyframes fadeOutUp {
      0% { transform:translateX(-50%) translateY(0); opacity:1; }
      100% { transform:translateX(-50%) translateY(-100px); opacity:0; }
    }
  `;
  document.head.appendChild(style);
}

function showRoundBanner(roundNum, totalRounds, onDone, customMain, customSub){
  const t = LANG[currentLang];
  const banner = document.getElementById('roundBanner');
  const numEl = document.getElementById('roundBannerNum');
  const subEl = document.getElementById('roundBannerSub');
  if(!banner) { onDone(); return; }

  // Auto-pick text based on game type
  let mainText, subText;
  if(customMain){ mainText = customMain; subText = customSub || 'GET READY!'; }
  else if(G.gameType === 'chkobba'){
    mainText = 'ROUND ' + roundNum;
    subText = roundNum === 1 ? 'TARGET: ' + G.targetScore + ' PTS' : 'GET READY!';
  } else if(G.gameType === 'rami'){
    mainText = 'ROUND ' + roundNum;
    subText = roundNum === 1 ? 'TARGET: ' + (G.ramiTarget||101) + ' PTS' : 'NEW ROUND — DRAW A CARD!';
  } else {
    mainText = t.round_banner + ' ' + roundNum + '/' + totalRounds;
    subText = roundNum === 1 ? '★ ' + t.yourTurn.replace('!','') + ' ★' : 'GET READY!';
  }

  numEl.textContent = mainText;
  subEl.textContent = subText;
  const newNum = numEl.cloneNode(true);
  numEl.parentNode.replaceChild(newNum, numEl);
  banner.style.display = 'flex';
  setTimeout(()=>{
    banner.style.display = 'none';
    onDone();
  }, 1600);
}

function startRound(){
  G.round++;G.total=0;G.lastCard=null;G.clockwise=false;
  G.choosing=null;G.busy=true;G.aiActive=false;G.selectedCard=null;
  hideOverlays();

  // Show round banner first, then deal after it fades
  showRoundBanner(G.round, G.totalRounds, ()=>{
    G.busy=false;
    const deck=shuffle(createDeck());
    let idx=0;
    G.players.forEach(p=>{p.hand=[];for(let i=0;i<8;i++)p.hand.push(deck[idx++]);});

    let starter=0;
    if(G.round===1){G.players.forEach((p,i)=>{if(p.hand.some(c=>c.r==='7'&&c.s==='♥'))starter=i;});}
    else starter=Math.floor(Math.random()*4);
    G.cur=starter;

    renderGame();
    setMsg(G.players[starter].name+'\'S TURN!');

    if(G.mp && MP.isHost){
      MP.snapshotDirty = true;
      mpSendSnapshot({newRound: true}); // Tell guests to show round banner
      mpStartTimer();
    }
    if(G.players[starter].isAI) scheduleAI();
  });
}

function playCard(card,choice=null){
  if(G.busy)return;
  G.busy=true;G.choosing=null;
  sfxCard();
  // ADDED: Mark snapshot dirty so mpHostTick broadcasts this state change to clients.
  // Previously, AI moves and round transitions were never explicitly flagged for
  // broadcast, so clients could miss state updates.
  if(G.mp && MP.isHost) MP.snapshotDirty = true;

  const p=G.players[G.cur];
  let val=0,msg='';

  if(card.r==='A'){val=choice!==null?choice:aiVal(card,G.total);msg=p.name+': ACE = '+val;}
  else if(card.r==='10'){val=choice!==null?choice:aiVal(card,G.total);msg=p.name+': TEN = '+(val>0?'+':'')+val;}
  else if(card.r==='J'){val=0;G.clockwise=!G.clockwise;msg=p.name+': JACK → '+(G.clockwise?'→':'←');}
  else if(card.r==='9'){val=0;msg=p.name+': NINE = 0';}
  else{val=BASE[card.r]||0;msg=p.name+': '+card.r+card.s+' (+'+val+')';}

  G.total+=val;G.lastCard=card;

  const hi=p.hand.findIndex(c=>c.r===card.r&&c.s===card.s);
  if(hi!==-1)p.hand.splice(hi,1);

  renderGame();setMsg(msg);

  if(G.total>=51){
    // Loser stays at current score, winners get +1
    G.players.forEach((player, idx) => {
      if(idx !== p.id) {
        player.score += 1; // Winners get +1
      }
    });
    renderGame();
    // ADDED: Broadcast score update immediately
    if(G.mp && MP.isHost) MP.snapshotDirty = true;
    const isHuman=p.id===0;
    setTimeout(()=>{
      if(isHuman){sfxLose();showOverlay('ovLose',p.name+' REACHED '+G.total+'!','OTHERS GET +1');}
      else{sfxWin();launchConfetti();showOverlay('ovWin',p.name+' BUSTED!','YOU GET +1 POINT');}
      // Broadcast loserSlot so each client decides their own win/lose perspective
      if(G.mp && MP.isHost){
        mpSendSnapshot({
          loserSlot: p.id,
          overlayMsg: p.name+' BUSTED!',
          overlaySub: '',
          loserTotal: G.total
        });
      }
      setTimeout(()=>{
        hideOverlays();G.busy=false;
        if(G.mp && MP.isHost) mpSendSnapshot({overlay:'hide'});
        if(G.round>=G.totalRounds){
          // 500ms gap so clients fully hide overlay before gameover screen appears
          setTimeout(()=>{
            if(G.mp && MP.isHost) mpSendSnapshot({gameover:true});
            endGame();
          }, 500);
        }
        else startRound();
      },2500);
    },500);
    return;
  }

  // ⚡ CRITICAL FIX: Check if all hands are empty (round over)
  const allHandsEmpty = G.players.every(player => player.hand.length === 0);
  if(allHandsEmpty){
    setTimeout(()=>{
      hideOverlays();
      G.busy=false;
      if(G.round>=G.totalRounds){
        if(G.mp && MP.isHost) mpSendSnapshot({gameover:true});
        endGame();
      }
      else startRound();
      // ADDED: startRound sets snapshotDirty internally for MP
    },1000);
    return;
  }

  setTimeout(()=>{
    G.busy=false;
    nextTurn();
    // ADDED: Broadcast the new turn state so clients see whose turn it is
    if(G.mp && MP.isHost) MP.snapshotDirty = true;
  },800);
}

function nextTurn(){
  // ⚡ SAFETY CHECK: If current player has no cards, end round
  if(G.players[G.cur].hand.length === 0){
    const allEmpty = G.players.every(p => p.hand.length === 0);
    if(allEmpty){
      G.busy=false;
      if(G.round>=G.totalRounds) endGame();
      else startRound();
      return;
    }
  }
  
  // Table layout: 0=bottom, 1=left, 2=right, 3=top
  // Anti-clockwise (default): bottom→left→top→right = [0,1,3,2]
  // Clockwise (after Jack):   bottom→right→top→left = [0,2,3,1]
  const antiClockOrder=[0,1,3,2];
  const clockOrder=[0,2,3,1];
  const order=G.clockwise?clockOrder:antiClockOrder;
  const currentIdx=order.indexOf(G.cur);
  G.cur=order[(currentIdx+1)%4];
  setMsg(G.players[G.cur].name+'\'S TURN!');
  renderGame();
  // MODIFIED: In MP, only host runs AI and timer.
  // Client does not simulate; it waits for the next snapshot.
  if(!G.mp || MP.isHost){
    if(G.players[G.cur].isAI) scheduleAI();
    if(G.mp) mpStartTimer();
  }
}

function scheduleAI(){
  G.aiActive=true;
  document.getElementById('thinkDots').classList.add('show');
  setTimeout(()=>{
    if(G.busy||G.choosing)return;
    
    // ⚡ SAFETY CHECK: Don't play if hand is empty
    const currentPlayer = G.players[G.cur];
    if(!currentPlayer.hand || currentPlayer.hand.length === 0){
      G.aiActive=false;
      document.getElementById('thinkDots').classList.remove('show');
      return;
    }
    
    G.aiActive=false;
    document.getElementById('thinkDots').classList.remove('show');
    const c=aiBest(currentPlayer.hand,G.total);
    // ADDED: playCard will set snapshotDirty itself; this is a safety belt
    if(c)playCard(c);
  },1500);
}

function humanClick(card){
  const _mySlot=G.mp?MP.mySlot:0;
  if(G.cur!==_mySlot||G.aiActive||G.busy)return;
  sfxHover();
  // If choice UI is open (A or 10 pending), clicking any card cancels it
  if(G.choosing){
    G.choosing=null;
    G.selectedCard=null;
    document.getElementById('choiceWrap').style.display='none';
    renderGame();
    return;
  }
  if(G.selectedCard&&G.selectedCard.r===card.r&&G.selectedCard.s===card.s){
    G.selectedCard=null;
  }else{
    G.selectedCard=card;
  }
  renderGame();
}

function confirmThrow(){
  if(!G.selectedCard)return;
  sfxClick();
  const card=G.selectedCard;
  if(card.r==='A'||card.r==='10'){
    // MODIFIED: For MP, show choice UI locally; the actual move is sent after choice
    G.choosing=card;
    renderChoiceUI(card);
    return;
  }
  if(G.mp){
    if(MP.isHost){
      // MODIFIED: Host queues its own input directly (no network round-trip needed)
      MP.inputQueue.push({slot:MP.mySlot, card:card, choice:null, tick:MP.seqOut});
    } else {
      // MODIFIED: Client sends 'input' message — NOT 'move'.
      // Network handler queues it; host processes it in tick loop.
      // This prevents the client from mutating G directly (was the root desync cause).
      mpSend('input',{slot:MP.mySlot, card:JSON.stringify(card), choice:null, tick:MP.seqOut});
    }
    G.selectedCard=null;
    return; // Client does NOT call playCard — host will apply and broadcast snapshot
  }
  // Single-player: play directly as before
  playCard(card);
  G.selectedCard=null;
}

function humanChoice(val){
  if(!G.choosing)return;
  sfxClick();
  const c=G.choosing;
  G.choosing=null;
  if(G.mp){
    if(MP.isHost){
      // MODIFIED: Host queues its own input directly
      MP.inputQueue.push({slot:MP.mySlot, card:c, choice:val, tick:MP.seqOut});
    } else {
      // MODIFIED: Client sends 'input' with choice value; host applies it
      mpSend('input',{slot:MP.mySlot, card:JSON.stringify(c), choice:val, tick:MP.seqOut});
    }
    G.selectedCard=null;
    document.getElementById('choiceWrap').style.display='none';
    return; // Client waits for host snapshot
  }
  // Single-player: play directly as before
  playCard(c,val);
  G.selectedCard=null;
}

function endGame(){
  hideOverlays(); // Always clear any lingering win/lose overlay before showing leaderboard
  sfxWin();launchConfetti();
  const sorted=[...G.players].sort((a,b)=>b.score-a.score);
  const winner=sorted[0];
  const t = LANG[currentLang];
  // Award XP to logged-in player
  const mySlotEG = G.mp ? MP.mySlot : 0;
  const iWon = sorted[0].id === mySlotEG;
  authAwardXp(iWon);
  document.getElementById('goWinner').textContent = '★ '+winner.name+' '+t.wins;
  const sc=document.getElementById('goScores');sc.innerHTML='';
  sorted.forEach(p=>{
    const row=document.createElement('div');
    row.className='score-row'+(p.id===winner.id?' winner-row':'');
    row.innerHTML='<div class="sname">'+(p.id===winner.id?'★ ':'')+p.name+'</div><div class="spts">'+p.score+' '+t.pts+'</div>';
    sc.appendChild(row);
  });
  // Show rematch button for all real players in MP
  const rematchBtn = document.getElementById('btnRematch');
  const rematchStatus = document.getElementById('rematchStatus');
  if(rematchBtn){
    rematchBtn.style.display = G.mp ? '' : 'none';
    rematchBtn.disabled = false;
    rematchBtn.querySelector('#lblRematch').textContent = t.rematch;
  }
  if(rematchStatus) rematchStatus.style.display = 'none';
  // Reset host vote tracker
  if(MP.isHost) MP.rematchVotes = new Set();
  setTimeout(()=>goTo('gameover'),1000);
}

// ============================================================
// RENDER
// ============================================================
function renderGame(){
  // Route to appropriate renderer based on game type
  if(G.gameType === 'chkobba'){
    renderChkobbaGame();
    return;
  }
  if(G.gameType === 'rami'){
    renderRamiGame();
    return;
  }
  
  // Original 51 game rendering
  document.getElementById('hdrRound').textContent=(G.round||1)+'/'+G.totalRounds;
  const hdrLbl51=document.getElementById('hdrRoundLabel');
  if(hdrLbl51) hdrLbl51.textContent='ROUND';

  // Flash total on change
  const tv=document.getElementById('ibTotal');
  const prevVal=tv.textContent;
  const newVal=String(G.total);
  tv.textContent=G.total;
  tv.className='ib-val'+(G.total>=40?' danger':'');
  if(prevVal!==newVal && prevVal!=='0'){
    tv.style.animation='none';
    requestAnimationFrame(()=>{
      tv.style.animation='valueFlash 0.35s cubic-bezier(0.22,1,0.36,1) forwards';
    });
  }

  // Direction indicator removed
  
  // Opponents - update panel + card backs
  [[1,'opp1Card','opp1Pts','opp1Cards','opp1Name'],[2,'opp2Card','opp2Pts','opp2Cards','opp2Name'],[3,'opp3Card','opp3Pts','opp3Cards','opp3Name']].forEach(([pid,cid,ptid,bcid,nid])=>{
    const p=G.players[pid];
    document.getElementById(cid).className='opp-card'+(pid===2||pid===1?' opp-side':'')+(G.cur===pid?' active':'');
    document.getElementById(ptid).textContent=p.score+' PTS';
    // Update name plate with real player name (fixes MP nicknames showing as hardcoded SAMI/LAYLA/KARIM)
    document.getElementById(nid).textContent=p.name;
    // Render card backs
    const bcEl=document.getElementById(bcid);
    bcEl.innerHTML='';
    const count=p.hand.length;
    for(let i=0;i<count;i++){
      const bc=document.createElement('div');
      bc.className='back-card';
      bcEl.appendChild(bc);
    }
  });

  // Your score (moved to hand section below)

  // Center card - butter smooth throw
  const slot=document.getElementById('cardSlot');
  if(G.lastCard){
    const c=G.lastCard,col=isRed(c)?'card-red':'card-black',hint=HINTS[c.r]||'';
    slot.innerHTML='<div class="px-card card-throwing"><div class="px-card-rank '+col+'">'+c.r+'</div><div class="px-card-suit '+col+'">'+c.s+'</div>'+(hint?'<div class="px-card-hint">'+hint+'</div>':'')+'</div>';
  }else{
    slot.innerHTML='<span style="color:rgba(201,168,76,0.2);font-size:28px;font-family:monospace;">?</span>';
  }

  // Your hand - staggered deal animation
  const handEl=document.getElementById('yourHand');
  const mySlot=G.mp?MP.mySlot:0;
  const myTurn=G.cur===mySlot&&!G.aiActive&&!G.choosing&&!G.busy;
  const myPlayer=G.players[mySlot];
  const prevCount=handEl.children.length;
  const newCount=myPlayer.hand.length;
  // MODIFIED: Removed `newCount===8` — that condition fired on EVERY snapshot when
  // hands were full, causing the dealing animation to replay every 100ms.
  // Now animation only triggers when cards are genuinely added to the hand.
  const isNewDeal=(newCount>prevCount);

  // Update your score with your actual name
  document.getElementById('yourPts').textContent=myPlayer.score+' PTS';

  handEl.innerHTML='';
  myPlayer.hand.forEach((card,i)=>{
    const col=isRed(card)?'card-red':'card-black',hint=HINTS[card.r]||'';
    const isSelected=G.selectedCard&&G.selectedCard.r===card.r&&G.selectedCard.s===card.s;
    const div=document.createElement('div');
    // Show as "cancellable" if choice UI is open — dim but still clickable
    const isChoosing=G.choosing&&!G.busy&&!G.aiActive&&G.cur===(G.mp?MP.mySlot:0);
    div.className='hand-card'+(myTurn?'':' disabled')+(isChoosing?' cancellable':'')+(isNewDeal?' card-dealing deal-d'+i:'')+(isSelected?' selected':'');
    div.innerHTML='<div class="hc-rank '+col+'">'+card.r+'</div><div class="hc-suit '+col+'">'+card.s+'</div>'+(hint?'<div class="hc-hint">'+hint+'</div>':'');
    if(myTurn||isChoosing)div.addEventListener('click',()=>humanClick(card));
    handEl.appendChild(div);
  });

  // Show/hide confirm button
  const confirmBtn=document.getElementById('confirmBtn');
  if(G.selectedCard&&myTurn){
    confirmBtn.style.display='block';
  }else{
    confirmBtn.style.display='none';
  }

  // Choice
  document.getElementById('choiceWrap').style.display='none';
}

function renderChoiceUI(card){
  const wrap=document.getElementById('choiceWrap');
  document.getElementById('choiceLbl').textContent=card.r==='A'?'CHOOSE ACE VALUE:':'CHOOSE TEN VALUE:';
  const row=document.getElementById('choiceRow');row.innerHTML='';
  (card.r==='A'?[1,11]:[-10,10]).forEach(v=>{
    const b=document.createElement('button');
    b.className='px-btn';
    b.style.cssText='font-size:clamp(14px,2vw,20px);padding:clamp(12px,2vh,18px) clamp(24px,4vw,40px);';
    b.textContent=(v>0?'+':'')+v;
    b.addEventListener('click',()=>humanChoice(v));
    row.appendChild(b);
  });
  // Cancel button — lets the player un-select the card
  const cancel=document.createElement('button');
  cancel.className='px-btn px-btn-red';
  cancel.style.cssText='font-size:clamp(9px,1.1vw,12px);padding:clamp(6px,1vh,10px) clamp(12px,2vw,18px);margin-top:4px;';
  cancel.textContent='✕ CANCEL';
  cancel.addEventListener('click',()=>{
    G.choosing=null;
    G.selectedCard=null;
    document.getElementById('choiceWrap').style.display='none';
    renderGame();
  });
  row.appendChild(cancel);
  wrap.style.display='flex';
}

function setMsg(txt){
  // For 51 game
  const msg51 = document.getElementById('msgStrip');
  if(msg51) msg51.textContent = txt;
  
  // Chkobba doesn't use message strip anymore (uses turn indicators instead)
}

function showOverlay(id,title,sub){
  hideOverlays();
  const el=document.getElementById(id);
  const msgEl=document.getElementById(id==='ovLose'?'ovLoseMsg':'ovWinMsg');
  if(msgEl)msgEl.textContent=title;
  if(id==='ovLose'&&sub){const s=document.getElementById('ovLoseSub');if(s)s.textContent=sub;}
  el.className='overlay '+(id==='ovLose'?'ov-lose':'ov-win')+' show';
}

function hideOverlays(){
  document.getElementById('ovLose').className='overlay ov-lose';
  document.getElementById('ovWin').className='overlay ov-win';
}



// ============================================================
// ACCOUNT SYSTEM
// ============================================================

// Rank definitions
const RANK_TIERS = [
  { name:'BEGINNER',   level:1, emoji:'🃏', xpRequired:0,    xpNext:100  },
  { name:'PLAYER',     level:2, emoji:'🎯', xpRequired:100,  xpNext:300  },
  { name:'CARD SHARK', level:3, emoji:'⭐', xpRequired:300,  xpNext:600  },
  { name:'HUSTLER',    level:4, emoji:'🔥', xpRequired:600,  xpNext:1000 },
  { name:'LEGEND',     level:5, emoji:'👑', xpRequired:1000, xpNext:null },
];

// Pixel avatars: emoji for chip display, pixel SVG HTML for the picker grid
const PIXEL_AVATARS = [
  {
    id:'card', label:'CARD', emoji:'🃏',
    pixelHtml: '<svg viewBox="0 0 20 28" xmlns="http://www.w3.org/2000/svg" style="width:70%;height:70%;image-rendering:pixelated;">'
      +'<rect width="20" height="28" fill="#FFFCE8"/>'
      +'<rect x="0" y="0" width="20" height="28" fill="none" stroke="#000" stroke-width="1.5"/>'
      +'<rect x="2" y="2" width="4" height="4" fill="#CC0000"/>'
      +'<text x="4" y="7" font-size="5" font-family="monospace" fill="#CC0000" font-weight="bold">A</text>'
      +'<text x="6" y="17" font-size="10" text-anchor="middle" font-family="serif" fill="#CC0000">♠</text>'
      +'</svg>'
  },
  {
    id:'king', label:'KING', emoji:'👑',
    pixelHtml: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:70%;height:70%;image-rendering:pixelated;">'
      +'<rect width="24" height="24" fill="#1a0800"/>'
      +'<rect x="2" y="16" width="20" height="4" fill="#FFD700"/>'
      +'<rect x="4" y="12" width="16" height="4" fill="#FFD700"/>'
      +'<rect x="2" y="10" width="4" height="3" fill="#FFD700"/>'
      +'<rect x="10" y="7" width="4" height="5" fill="#FFD700"/>'
      +'<rect x="18" y="10" width="4" height="3" fill="#FFD700"/>'
      +'<rect x="11" y="4" width="2" height="3" fill="#FFD700"/>'
      +'<rect x="4" y="7" width="2" height="3" fill="#FFD700"/>'
      +'<rect x="18" y="7" width="2" height="3" fill="#FFD700"/>'
      +'<rect x="10" y="14" width="1" height="1" fill="#CC0000"/>'
      +'<rect x="13" y="14" width="1" height="1" fill="#CC0000"/>'
      +'</svg>'
  },
  {
    id:'flame', label:'FLAME', emoji:'🔥',
    pixelHtml: '<svg viewBox="0 0 16 22" xmlns="http://www.w3.org/2000/svg" style="width:55%;height:70%;image-rendering:pixelated;">'
      +'<rect width="16" height="22" fill="#1a0800"/>'
      +'<rect x="7" y="1" width="2" height="3" fill="#FFD700"/>'
      +'<rect x="5" y="3" width="6" height="2" fill="#FFD700"/>'
      +'<rect x="4" y="5" width="8" height="3" fill="#FF8C00"/>'
      +'<rect x="3" y="8" width="10" height="4" fill="#FF4500"/>'
      +'<rect x="4" y="12" width="8" height="3" fill="#FF4500"/>'
      +'<rect x="5" y="15" width="6" height="3" fill="#CC0000"/>'
      +'<rect x="6" y="18" width="4" height="2" fill="#880000"/>'
      +'<rect x="8" y="5" width="2" height="2" fill="#FFFCE8"/>'
      +'</svg>'
  },
  {
    id:'star', label:'STAR', emoji:'⭐',
    pixelHtml: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:70%;height:70%;image-rendering:pixelated;">'
      +'<rect width="24" height="24" fill="#1a0800"/>'
      +'<rect x="11" y="1" width="2" height="4" fill="#FFD700"/>'
      +'<rect x="11" y="19" width="2" height="4" fill="#FFD700"/>'
      +'<rect x="1" y="11" width="4" height="2" fill="#FFD700"/>'
      +'<rect x="19" y="11" width="4" height="2" fill="#FFD700"/>'
      +'<rect x="3" y="3" width="3" height="3" fill="#FFD700"/>'
      +'<rect x="18" y="3" width="3" height="3" fill="#FFD700"/>'
      +'<rect x="3" y="18" width="3" height="3" fill="#FFD700"/>'
      +'<rect x="18" y="18" width="3" height="3" fill="#FFD700"/>'
      +'<rect x="7" y="7" width="10" height="10" fill="#FFD700"/>'
      +'<rect x="5" y="9" width="14" height="6" fill="#FFD700"/>'
      +'<rect x="9" y="5" width="6" height="14" fill="#FFD700"/>'
      +'<rect x="10" y="10" width="4" height="4" fill="#FFFCE8"/>'
      +'</svg>'
  },
];
function getAvatarEmoji(id){
  const av = PIXEL_AVATARS.find(a=>a.id===id);
  return av ? av.emoji : '🃏';
}

// Current auth session
let AUTH = {
  user: null,       // Supabase user object
  profile: null,    // { username, avatar, xp }
  isGuest: false,
};

// Rank helpers
function getRankByXp(xp){
  let rank = RANK_TIERS[0];
  for(const r of RANK_TIERS){ if(xp >= r.xpRequired) rank = r; }
  return rank;
}

function getRankDisplay(xp){
  const rank = getRankByXp(xp);
  return rank.emoji + ' ' + rank.name;
}

// ── Supabase Auth helpers ──
async function supaAuthFetch(method, path, body=null, token=null){
  const headers = {
    'apikey': SUPABASE_KEY,
    'Authorization': 'Bearer ' + (token || SUPABASE_KEY),
    'Content-Type': 'application/json',
  };
  // Only add Prefer:return=minimal on write operations, never on GET
  // (return=minimal on GET tells Supabase to return nothing — breaks profile loading)
  if(path.startsWith('/rest/') && method !== 'GET'){
    headers['Prefer'] = 'return=minimal';
  }
  const opts = { method, headers };
  if(body) opts.body = JSON.stringify(body);
  const r = await fetch(SUPABASE_URL + path, opts);
  return r;
}

async function supaSignUp(email, password, username){
  const r = await supaAuthFetch('POST', '/auth/v1/signup', { email, password });
  const data = await r.json();
  if(!r.ok || data.error) return { error: data.error?.message || data.msg || 'SIGNUP FAILED' };
  // Insert profile row
  const token = data.access_token;
  const userId = data.user?.id;
  if(userId){
    await supaAuthFetch('POST', '/rest/v1/profiles',
      { id: userId, username: username.toUpperCase(), avatar: 'card', xp: 0 },
      token
    );
  }
  return { data, token };
}

async function supaSignIn(email, password){
  const r = await supaAuthFetch('POST', '/auth/v1/token?grant_type=password', { email, password });
  const data = await r.json();
  if(!r.ok || data.error) return { error: data.error_description || data.error || 'SIGN IN FAILED' };
  return { data };
}

async function supaGetProfile(userId, token){
  const r = await supaAuthFetch('GET', '/rest/v1/profiles?id=eq.'+userId+'&select=*', null, token);
  if(!r.ok) return null;
  const rows = await r.json();
  return rows[0] || null;
}

async function supaUpdateProfile(userId, updates, token){
  if(!token || !userId) return false;
  const r = await supaAuthFetch('PATCH',
    '/rest/v1/profiles?id=eq.' + userId,
    updates,
    token
  );
  return r.ok || r.status === 204;
}

async function supaSignOut(token){
  await supaAuthFetch('POST', '/auth/v1/logout', {}, token);
}

async function supaResetPassword(email){
  await supaAuthFetch('POST', '/auth/v1/recover', { email });
}

// ── Local session persistence ──
function authSaveSession(accessToken, userId){
  localStorage.setItem('mw_access_token', accessToken);
  localStorage.setItem('mw_user_id', userId);
}

function authLoadSession(){
  return {
    accessToken: localStorage.getItem('mw_access_token'),
    userId: localStorage.getItem('mw_user_id'),
  };
}

function authClearSession(){
  localStorage.removeItem('mw_access_token');
  localStorage.removeItem('mw_user_id');
}

// ── XP award on game end ──
async function authAwardXp(won){
  if(!AUTH.user || AUTH.isGuest || !AUTH.profile) return;
  const xpGain = won ? 20 : 5;
  AUTH.profile.xp = (AUTH.profile.xp || 0) + xpGain;
  updateProfileChip();
  // Save new XP to Supabase
  const token = localStorage.getItem('mw_access_token');
  await supaUpdateProfile(AUTH.user.id, { xp: AUTH.profile.xp }, token);
}

// ── UI helpers ──
function positionFriendsBtn(){
  // Friends button is now positioned via CSS next to the mute button — no JS needed
}

function avatarIdToEmoji(id){
  if(!id) return '🃏';
  if(id === 'card')  return '🃏';
  if(id === 'king')  return '👑';
  if(id === 'flame') return '🔥';
  if(id === 'star')  return '⭐';
  if(id.startsWith('data:')) return '📷';
  return '🃏';
}

function updateProfileChip(){
  const chip = document.getElementById('profileChip');
  if(!chip) return;
  if(!AUTH.user && !AUTH.isGuest){ chip.classList.remove('show'); return; }

  chip.classList.add('show');
  // Show friends button only for real accounts, not guests
  const fBtn = document.getElementById('friendsBtn');
  if(fBtn){
    if(!AUTH.isGuest) fBtn.classList.add('show');
    else fBtn.classList.remove('show');
  }
  const username = AUTH.isGuest ? 'GUEST' : (AUTH.profile?.username || 'PLAYER');
  const xp = AUTH.profile?.xp || 0;
  const rank = getRankDisplay(xp);
  const avatarId = AUTH.isGuest ? null : (AUTH.profile?.avatar || 'card');

  document.getElementById('chipUsername').textContent = username;
  document.getElementById('chipRank').textContent = rank;

  const box = document.getElementById('chipAvatarBox');
  if(box){
    if(avatarId && avatarId.startsWith('data:')){
      // Photo: show as img
      box.innerHTML = '<img src="' + avatarId + '" style="width:100%;height:100%;object-fit:cover;">';
    } else {
      box.textContent = avatarIdToEmoji(avatarId);
    }
  }
}

function renderProfileScreen(){
  if(!AUTH.user || AUTH.isGuest) return;
  const profile = AUTH.profile;
  const xp = profile?.xp || 0;
  const username = profile?.username || 'PLAYER';
  const avatarId = profile?.avatar || 'card';
  const rank = getRankByXp(xp);

  // Always close pickers on open
  const picker = document.getElementById('avatarPicker');
  if(picker) picker.style.display = 'none';
  const editRow = document.getElementById('profileUsernameEdit');
  const displayRow = document.getElementById('profileUsernameDisplay');
  if(editRow) editRow.style.display = 'none';
  if(displayRow) displayRow.style.display = 'flex';

  // Username — show actual saved name
  const unEl = document.getElementById('profileUsername');
  if(unEl) unEl.textContent = username;

  // Avatar display in profile screen
  const avatarBox = document.getElementById('profileAvatarBox');
  if(avatarBox){
    if(avatarId && avatarId.startsWith('data:')){
      avatarBox.innerHTML = '<img src="'+avatarId+'" style="width:100%;height:100%;object-fit:cover;">';
      avatarBox.style.fontSize = '';
    } else {
      const av = PIXEL_AVATARS.find(a=>a.id===avatarId);
      if(av){
        avatarBox.innerHTML = av.pixelHtml;
        avatarBox.style.cssText += ';display:flex;align-items:center;justify-content:center;';
      } else {
        avatarBox.textContent = '🃏';
        avatarBox.style.fontSize = 'clamp(28px,5vw,44px)';
      }
    }
  }

  const badge = document.getElementById('profileRankBadge');
  if(badge) badge.textContent = rank.emoji + ' ' + rank.name;
  const rname = document.getElementById('profileRankName');
  if(rname) rname.textContent = rank.emoji + ' ' + rank.name;
  const rlvl = document.getElementById('profileRankLevel');
  if(rlvl) rlvl.textContent = 'LVL ' + rank.level;

  // XP progress bar
  const xpInRank = xp - rank.xpRequired;
  const xpNeeded = rank.xpNext ? (rank.xpNext - rank.xpRequired) : 1;
  const pct = rank.xpNext ? Math.min(100, Math.floor((xpInRank / xpNeeded) * 100)) : 100;
  const fill = document.getElementById('profileRankFill');
  if(fill) fill.style.width = pct + '%';
  const xpTxt = document.getElementById('profileXpTxt');
  if(xpTxt) xpTxt.textContent = rank.xpNext
    ? (xp - rank.xpRequired) + ' / ' + (rank.xpNext - rank.xpRequired) + ' XP TO NEXT RANK'
    : 'MAX RANK ACHIEVED!';

  // Rank list
  const listEl = document.getElementById('rankListEl');
  if(listEl){
    listEl.innerHTML = '';
    RANK_TIERS.forEach(r => {
      const isCurrent = rank.level === r.level;
      const div = document.createElement('div');
      div.style.color = isCurrent ? '#FFD700' : (xp >= r.xpRequired ? '#888' : '#444');
      div.textContent = r.emoji + ' ' + r.name + '  LVL ' + r.level + (isCurrent ? ' ← YOU' : '');
      listEl.appendChild(div);
    });
  }

  // Build avatar picker grid with pixel SVG art
  const grid = document.getElementById('avatarGrid');
  if(grid){
    grid.innerHTML = '';
    PIXEL_AVATARS.forEach(av => {
      const btn = document.createElement('div');
      btn.className = 'avatar-option' + (av.id === avatarId ? ' sel' : '');
      btn.style.cssText = 'display:flex;align-items:center;justify-content:center;background:#0a0a1a;';
      btn.innerHTML = av.pixelHtml;
      // pointer-events:none on the SVG so clicks reach the btn div
      const svg = btn.querySelector('svg');
      if(svg) svg.style.pointerEvents = 'none';
      btn.title = av.label;
      btn.onclick = () => { sfxClick(); authSetAvatar(av.id); };
      grid.appendChild(btn);
    });
    // Photo upload option
    const uploadBtn = document.createElement('div');
    uploadBtn.className = 'avatar-option';
    uploadBtn.title = 'UPLOAD PHOTO';
    uploadBtn.style.cssText = 'display:flex;align-items:center;justify-content:center;font-size:clamp(20px,3vw,28px);';
    uploadBtn.textContent = '📷';
    uploadBtn.onclick = () => document.getElementById('avatarFileInput').click();
    grid.appendChild(uploadBtn);
  }
}

function toggleAvatarPicker(){
  const picker = document.getElementById('avatarPicker');
  picker.style.display = picker.style.display === 'none' ? '' : 'none';
}

function showXpGuide(){
  sfxClick();
  document.getElementById('xpGuideModal').style.display = 'flex';
}

function closeXpGuide(){
  sfxClick();
  document.getElementById('xpGuideModal').style.display = 'none';
}

function toggleUsernameEdit(){
  const display = document.getElementById('profileUsernameDisplay');
  const edit = document.getElementById('profileUsernameEdit');
  const input = document.getElementById('usernameEditInput');
  const isOpen = edit && edit.style.display !== 'none' && edit.style.display !== '';
  if(!isOpen){
    if(input) input.value = AUTH.profile?.username || '';
    if(display) display.style.display = 'none';
    if(edit){ edit.style.display = 'flex'; }
    if(input) setTimeout(()=>input.focus(), 50);
  } else {
    if(display) display.style.display = 'flex';
    if(edit) edit.style.display = 'none';
  }
}

async function saveUsername(){
  const input = document.getElementById('usernameEditInput');
  if(!input){ showToast('ERROR: INPUT NOT FOUND'); return; }
  const raw = input.value || '';
  const newName = raw.trim().toUpperCase();
  if(newName.length === 0){ showToast('TYPE A NAME FIRST'); return; }
  if(newName.length < 3){ showToast('MIN 3 CHARACTERS'); return; }
  if(!AUTH.profile) return;
  AUTH.profile.username = newName;
  // Update display
  const unEl = document.getElementById('profileUsername');
  if(unEl) unEl.textContent = newName;
  const chipEl = document.getElementById('chipUsername');
  if(chipEl) chipEl.textContent = newName;
  // Close edit row, show display row
  const display = document.getElementById('profileUsernameDisplay');
  const edit = document.getElementById('profileUsernameEdit');
  if(edit) edit.style.display = 'none';
  if(display) display.style.display = 'flex';
  sfxCoin();
  if(AUTH.user){
    const token = localStorage.getItem('mw_access_token');
    const ok = await supaUpdateProfile(AUTH.user.id, { username: newName }, token);
    showToast(ok ? 'NAME SAVED!' : 'SAVE FAILED — CHECK CONNECTION');
  } else {
    showToast('NAME UPDATED (GUEST)');
  }
}

async function authUploadPhoto(event){
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    const dataUrl = e.target.result;
    if(!AUTH.profile) AUTH.profile = {};
    AUTH.profile.avatar = dataUrl;
    // Update big avatar box with photo
    const avatarBox = document.getElementById('profileAvatarBox');
    if(avatarBox){
      avatarBox.innerHTML = '<img src="'+dataUrl+'" style="width:100%;height:100%;object-fit:cover;">';
    }
    updateProfileChip();
    const picker = document.getElementById('avatarPicker');
    if(picker) picker.style.display = 'none';
    sfxCoin();
    showToast('PHOTO SET!');
  };
  reader.readAsDataURL(file);
  event.target.value = ''; // Reset input
}

async function authSetAvatar(avatarId){
  if(!AUTH.profile) return;
  AUTH.profile.avatar = avatarId;
  // Update big avatar box immediately
  const avatarBox = document.getElementById('profileAvatarBox');
  if(avatarBox){
    if(avatarId.startsWith('data:')){
      avatarBox.innerHTML = '<img src="'+avatarId+'" style="width:100%;height:100%;object-fit:cover;">';
    } else {
      const av2 = PIXEL_AVATARS.find(a=>a.id===avatarId);
      if(av2){
        avatarBox.innerHTML = av2.pixelHtml;
        avatarBox.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1a0800;border:4px solid #FFD700;box-shadow:4px 4px 0 #8B6914;';
      }
    }
  }
  // Update chip emoji
  updateProfileChip();
  // Highlight selected in grid
  document.querySelectorAll('#avatarGrid .avatar-option').forEach((btn,i) => {
    if(i < PIXEL_AVATARS.length){
      btn.classList.toggle('sel', PIXEL_AVATARS[i].id === avatarId);
    }
  });
  // Close picker
  document.getElementById('avatarPicker').style.display = 'none';
  sfxCoin();
  if(AUTH.user && !avatarId.startsWith('data:')){
    const token = localStorage.getItem('mw_access_token');
    await supaUpdateProfile(AUTH.user.id, { avatar: avatarId }, token);
  }
}



// ── Auth actions ──
async function authSignIn(){
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  const btn = document.getElementById('loginBtn');

  if(!email || !password){ errEl.textContent = '✕ FILL IN ALL FIELDS'; return; }
  errEl.textContent = '';
  btn.textContent = 'SIGNING IN...';
  btn.disabled = true;

  const result = await supaSignIn(email, password);
  btn.textContent = '▶ SIGN IN';
  btn.disabled = false;

  if(result.error){
    errEl.textContent = '✕ ' + result.error.toUpperCase();
    return;
  }

  const data = result.data;
  AUTH.user = data.user;
  AUTH.isGuest = false;
  authSaveSession(data.access_token, data.user.id);

  // Load profile
  AUTH.profile = await supaGetProfile(data.user.id, data.access_token);
  if(!AUTH.profile){
    // Create default profile if missing
    await supaAuthFetch('POST', '/rest/v1/profiles',
      { id: data.user.id, username: email.split('@')[0].toUpperCase().slice(0,14), avatar: 'card', xp: 0 },
      data.access_token
    );
    AUTH.profile = await supaGetProfile(data.user.id, data.access_token);
  }

  sfxCoin();
  updateProfileChip();
  dmStartGlobalListener();
  goTo('menu');
}

async function authSignUp(){
  const username = document.getElementById('signupUsername').value.trim().toUpperCase();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const password2 = document.getElementById('signupPassword2').value;
  const errEl = document.getElementById('signupError');
  const btn = document.getElementById('signupBtn');

  if(!username || !email || !password || !password2){ errEl.textContent = '✕ FILL IN ALL FIELDS'; return; }
  if(username.length < 3){ errEl.textContent = '✕ USERNAME TOO SHORT (MIN 3)'; return; }
  if(password.length < 6){ errEl.textContent = '✕ PASSWORD TOO SHORT (MIN 6)'; return; }
  if(password !== password2){
    errEl.textContent = '✕ PASSWORDS DON\'T MATCH';
    document.getElementById('signupPassword2').classList.add('error');
    return;
  }
  document.getElementById('signupPassword2').classList.remove('error');
  errEl.textContent = '';
  btn.textContent = 'CREATING...';
  btn.disabled = true;

  // Step 1: Sign up
  const signupRes = await supaAuthFetch('POST', '/auth/v1/signup', { email, password });
  const signupData = await signupRes.json();
  if(!signupRes.ok || signupData.error){
    btn.textContent = '✓ CREATE ACCOUNT';
    btn.disabled = false;
    errEl.textContent = '✕ ' + ((signupData.error && signupData.error.message) || signupData.msg || 'SIGNUP FAILED').toUpperCase();
    return;
  }

  // Step 2: Sign in immediately to get a valid token
  btn.textContent = 'SIGNING IN...';
  const signIn = await supaSignIn(email, password);
  btn.textContent = '✓ CREATE ACCOUNT';
  btn.disabled = false;

  if(signIn.error){
    errEl.textContent = '✕ ' + signIn.error.toUpperCase();
    return;
  }

  const token = signIn.data.access_token;
  const userId = signIn.data.user.id;
  AUTH.user = signIn.data.user;
  AUTH.isGuest = false;
  authSaveSession(token, userId);

  // Step 3: Create profile row
  await supaAuthFetch('POST', '/rest/v1/profiles',
    { id: userId, username: username, avatar: 'card', xp: 0 },
    token
  );

  // Step 4: Load profile back (fallback to in-memory if DB had issues)
  AUTH.profile = await supaGetProfile(userId, token);
  if(!AUTH.profile){
    AUTH.profile = { id: userId, username: username, avatar: 'card', xp: 0 };
  }

  sfxCoin();
  updateProfileChip();
  setTimeout(positionFriendsBtn, 100);
  refreshFriendsBadge();
  dmStartGlobalListener();
  goTo('menu');
}

function authGuest(){
  sfxClick();
  AUTH.user = null;
  AUTH.profile = null;
  AUTH.isGuest = true;
  updateProfileChip();
  goTo('menu');
}

async function authSignOut(){
  sfxClick();
  const token = localStorage.getItem('mw_access_token');
  if(token) await supaSignOut(token);
  AUTH = { user: null, profile: null, isGuest: false };
  authClearSession();
  document.getElementById('profileChip').classList.remove('show');
  goTo('auth-login');
}

async function authForgotPassword(){
  const email = document.getElementById('loginEmail').value.trim();
  if(!email){ document.getElementById('loginError').textContent = '✕ ENTER YOUR EMAIL FIRST'; return; }
  await supaResetPassword(email);
  document.getElementById('loginError').style.color = '#44FF88';
  document.getElementById('loginError').textContent = '✓ RESET LINK SENT TO EMAIL';
  setTimeout(()=>{
    document.getElementById('loginError').style.color = '';
    document.getElementById('loginError').textContent = '';
  }, 4000);
}

// ══════════════════════════════════════════════════════════════
// FRIENDS SYSTEM
// ══════════════════════════════════════════════════════════════

let _friendsTab = 'friends';

// ── Supabase friends helpers ──
async function friendsFetch(method, path, body=null){
  const token = localStorage.getItem('mw_access_token');
  return supaAuthFetch(method, path, body, token);
}

async function getFriendships(){
  // Get all rows where I am requester or receiver
  const myId = AUTH.user?.id;
  if(!myId) return [];
  const r = await friendsFetch('GET',
    `/rest/v1/friendships?or=(requester_id.eq.${myId},receiver_id.eq.${myId})&select=*`
  );
  if(!r.ok) return [];
  return r.json();
}

async function getProfilesByIds(ids){
  if(!ids.length) return [];
  const r = await friendsFetch('GET',
    `/rest/v1/profiles?id=in.(${ids.join(',')})&select=id,username,avatar,xp,last_seen`
  );
  if(!r.ok) return [];
  return r.json();
}

async function searchProfileByUsername(username){
  // ilike = case-insensitive match so 'bitchi55' finds 'BITCHI55'
  const r = await friendsFetch('GET',
    `/rest/v1/profiles?username=ilike.${encodeURIComponent(username.trim())}&select=id,username,avatar,xp,last_seen`
  );
  if(!r.ok) return null;
  const rows = await r.json();
  return rows[0] || null;
}

async function sendFriendRequest(receiverId){
  const r = await friendsFetch('POST', '/rest/v1/friendships', {
    requester_id: AUTH.user.id,
    receiver_id: receiverId,
    status: 'pending'
  });
  return r.ok || r.status === 201 || r.status === 204;
}

async function acceptFriendRequest(friendshipId){
  const r = await friendsFetch('PATCH',
    `/rest/v1/friendships?id=eq.${friendshipId}`,
    { status: 'accepted' }
  );
  return r.ok || r.status === 204;
}

async function deleteFriendship(friendshipId){
  const r = await friendsFetch('DELETE',
    `/rest/v1/friendships?id=eq.${friendshipId}`
  );
  return r.ok || r.status === 204;
}

async function updateLastSeen(){
  if(!AUTH.user || AUTH.isGuest) return;
  const token = localStorage.getItem('mw_access_token');
  await supaAuthFetch('PATCH',
    `/rest/v1/profiles?id=eq.${AUTH.user.id}`,
    { last_seen: new Date().toISOString() },
    token
  );
}

function isOnline(lastSeen){
  if(!lastSeen) return false;
  return (Date.now() - new Date(lastSeen).getTime()) < 5 * 60 * 1000; // 5 min
}

// ── UI helpers ──
function friendAvatarEmoji(avatarId){
  return avatarIdToEmoji(avatarId) || '🃏';
}

function buildFriendRow(profile, friendship, type){
  // type: 'friend' | 'incoming' | 'sent'
  const online = isOnline(profile.last_seen);
  const rank = getRankByXp(profile.xp || 0);
  const row = document.createElement('div');
  row.className = 'friend-row';

  let actionsHtml = '';
  if(type === 'friend'){
    // MSG button — green if online, dim if offline
    const msgClass = online ? 'fab-msg online-msg' : 'fab-msg';
    const msgTitle = online ? 'SEND MESSAGE' : 'OFFLINE';
    actionsHtml = `
      <button class="friend-action-btn ${msgClass}"
        title="${msgTitle}"
        onclick="openDmPanel('${profile.id}','${profile.username}','${profile.avatar || 'card'}',${online})">✉</button>
      <button class="friend-action-btn fab-remove"
        onclick="removeFriend('${friendship.id}')">REMOVE</button>`;
  } else if(type === 'incoming'){
    actionsHtml = `
      <button class="friend-action-btn fab-accept"
        onclick="acceptFriend('${friendship.id}')">✓</button>
      <button class="friend-action-btn fab-decline"
        onclick="declineFriend('${friendship.id}')">✕</button>`;
  } else if(type === 'sent'){
    actionsHtml = `<button class="friend-action-btn fab-remove"
      onclick="cancelRequest('${friendship.id}')">CANCEL</button>`;
  }

  row.innerHTML = `
    <div class="friend-avatar">${friendAvatarEmoji(profile.avatar)}</div>
    <div class="friend-info">
      <div class="friend-name">${profile.username}</div>
      <div class="friend-rank">${rank.emoji} ${rank.name} · ${profile.xp || 0} XP</div>
    </div>
    <div class="friend-online ${online ? 'on' : ''}" title="${online ? 'ONLINE' : 'OFFLINE'}"></div>
    ${actionsHtml}
  `;
  return row;
}

// ══════════════════════════════════════════════════════════════
// FRIEND DM SYSTEM
// ══════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════
// FRIEND DM SYSTEM  —  ephemeral / real-time / notified
// ══════════════════════════════════════════════════════════════

// Ephemeral: messages live only in-memory. Page reload = gone.
// Structure: { [friendId]: [{mine, text, time, senderName}] }
const DM_STORE = {};

// Unread counts: { [friendId]: count }
const DM_UNREAD = {};

let _dmActiveFriendId     = null;
let _dmActiveFriendName   = null;
let _dmActiveFriendOnline = false;
let _dmPanelOpen          = false;

// Active-panel WS (for sending)
let _dmWs      = null;
let _dmChannel = null;

// Global listener WS — one connection that subscribes to ALL friend channels
// so you get notified even when the DM panel is closed
let _dmGlobalWs       = null;
let _dmGlobalChannels = []; // list of channel topics joined

// Deterministic channel name (sorted IDs)
function dmChannelName(idA, idB){
  return 'dm-' + [idA, idB].sort().join('-');
}
function dmNow(){
  const d = new Date();
  return d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
}

// ── Global listener (started once after login) ────────────────
// Subscribes to all accepted-friend DM channels so messages
// arrive even while the panel is closed.
async function dmStartGlobalListener(){
  if(!AUTH.user || AUTH.isGuest) return;
  if(_dmGlobalWs && _dmGlobalWs.readyState <= 1) return; // already running

  // Fetch accepted friends to know which channels to join
  const ships = await getFriendships();
  const myId  = AUTH.user.id;
  const friendIds = ships
    .filter(s => s.status === 'accepted')
    .map(s => s.requester_id === myId ? s.receiver_id : s.requester_id);

  if(!friendIds.length) return;

  const url = SUPABASE_URL.replace('https','wss')
    + '/realtime/v1/websocket?apikey=' + SUPABASE_KEY + '&vsn=1.0.0';
  const ws = new WebSocket(url);
  _dmGlobalWs = ws;

  ws.onopen = () => {
    // Join every friend's DM channel
    friendIds.forEach((fid, i) => {
      const ch = 'realtime:' + dmChannelName(myId, fid);
      _dmGlobalChannels.push(ch);
      ws.send(JSON.stringify({ topic: ch, event: 'phx_join', payload: {}, ref: 'g' + i }));
    });
    // Heartbeat
    const hbIv = setInterval(() => {
      if(ws.readyState === 1){
        ws.send(JSON.stringify({ topic:'phoenix', event:'heartbeat', payload:{}, ref:'ghb' }));
      } else { clearInterval(hbIv); }
    }, 20000);
  };

  ws.onmessage = (e) => {
    try {
      const msg = JSON.parse(e.data);
      if(msg.event !== 'broadcast') return;
      const p = msg.payload;
      if(!p?.type) return;
      if(p.senderId === AUTH.user.id) return; // ignore own echo

      const senderId = p.senderId;

      // ── Party invite ──────────────────────────────────────
      if(p.type === 'party_invite'){
        mpHandleIncomingInvite(p);
        return;
      }

      // ── DM message ───────────────────────────────────────
      if(p.type !== 'dm') return;

      const m = { mine: false, text: p.text, time: p.time, senderName: p.senderName || '???' };

      // Store in memory
      if(!DM_STORE[senderId]) DM_STORE[senderId] = [];
      DM_STORE[senderId].push(m);

      // If panel is open for this sender → append bubble live
      if(_dmPanelOpen && _dmActiveFriendId === senderId){
        const container = document.getElementById('dmMessages');
        if(container){
          container.appendChild(buildDmBubble(m));
          scrollDmToBottom();
          sfxCard();
        }
      } else {
        // Panel closed or different friend → notify
        DM_UNREAD[senderId] = (DM_UNREAD[senderId] || 0) + 1;
        dmShowNotification(m.senderName, m.text, senderId, p.senderAvatar || 'card');
        dmUpdateFriendsBadge();
      }
    } catch(err){}
  };

  ws.onerror = () => {};
}

// ── DM notification toast ─────────────────────────────────────
function dmShowNotification(senderName, text, senderId, senderAvatar){
  sfxCoin();
  const existing = document.getElementById('dmNotif_' + senderId);
  if(existing) existing.remove(); // replace stacked notifs for same sender

  const notif = document.createElement('div');
  notif.id = 'dmNotif_' + senderId;
  notif.style.cssText = `
    position:fixed;
    top:clamp(70px,10vh,90px);
    right:12px;
    z-index:9000;
    background:#0d0d1a;
    border:3px solid #FFD700;
    box-shadow:4px 4px 0 #8B6914, 0 0 20px rgba(255,215,0,0.25);
    font-family:'Press Start 2P',monospace;
    display:flex;
    align-items:center;
    gap:10px;
    padding:10px 14px;
    max-width:clamp(200px,55vw,300px);
    cursor:pointer;
    animation:dmNotifSlide 0.3s cubic-bezier(0.22,1,0.36,1);
    transform-origin:right center;
  `;
  notif.innerHTML = `
    <div style="font-size:20px;flex-shrink:0;">${friendAvatarEmoji(senderAvatar)}</div>
    <div style="display:flex;flex-direction:column;gap:4px;min-width:0;flex:1;">
      <div style="font-size:clamp(6px,0.8vw,8px);color:#FFD700;letter-spacing:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
        ✉ ${senderName}
      </div>
      <div style="font-size:clamp(6px,0.7vw,7px);color:#C9A84C;letter-spacing:0.5px;line-height:1.6;word-break:break-word;max-height:28px;overflow:hidden;">
        ${escapeHtml(text)}
      </div>
    </div>
    <div style="font-family:'Press Start 2P',monospace;font-size:7px;color:#444;flex-shrink:0;">TAP</div>
  `;

  // Inject keyframe once
  if(!document.getElementById('dmNotifStyle')){
    const s = document.createElement('style');
    s.id = 'dmNotifStyle';
    s.textContent = `
      @keyframes dmNotifSlide {
        from { opacity:0; transform:translateX(120%); }
        to   { opacity:1; transform:translateX(0);    }
      }
      @keyframes dmNotifFadeOut {
        to { opacity:0; transform:translateX(80%); }
      }
    `;
    document.head.appendChild(s);
  }

  // Click → open DM panel for that friend (need their info)
  notif.onclick = async () => {
    notif.remove();
    DM_UNREAD[senderId] = 0;
    dmUpdateFriendsBadge();
    // Load their profile to open panel properly
    const profiles = await getProfilesByIds([senderId]);
    const prof = profiles[0];
    if(prof){
      const online = isOnline(prof.last_seen);
      // Navigate to friends screen first if not there
      if(document.querySelector('.screen.active')?.id !== 'friends-screen'){
        goTo('friends-screen');
        await loadFriendsScreen();
      }
      openDmPanel(senderId, prof.username, prof.avatar || 'card', online);
    }
  };

  document.body.appendChild(notif);

  // Auto-dismiss after 5 s
  setTimeout(() => {
    if(!notif.parentNode) return;
    notif.style.animation = 'dmNotifFadeOut 0.35s ease forwards';
    setTimeout(() => notif.remove(), 350);
  }, 5000);
}

// ── Friends button unread badge ───────────────────────────────
function dmUpdateFriendsBadge(){
  const total = Object.values(DM_UNREAD).reduce((a,b) => a + b, 0);
  const badge = document.getElementById('friendsBadge');
  if(!badge) return;
  if(total > 0){
    badge.textContent = total;
    badge.classList.add('show');
    badge.style.background = '#4488FF'; // blue = DM, red = friend requests
  } else {
    // Fall back to friend-request count if any
    refreshFriendsBadge();
  }
}

// ── Panel WS (for sending) ────────────────────────────────────
function dmConnect(channel, onMsg){
  if(_dmWs){ try{ _dmWs.close(); }catch(e){} _dmWs = null; }
  const url = SUPABASE_URL.replace('https','wss')
    + '/realtime/v1/websocket?apikey=' + SUPABASE_KEY + '&vsn=1.0.0';
  const ws = new WebSocket(url);
  _dmWs = ws;
  ws.onopen = () => {
    ws.send(JSON.stringify({ topic:'realtime:'+channel, event:'phx_join', payload:{}, ref:'dm1' }));
    const hbIv = setInterval(() => {
      if(ws.readyState === 1){
        ws.send(JSON.stringify({ topic:'phoenix', event:'heartbeat', payload:{}, ref:'hb' }));
      } else { clearInterval(hbIv); }
    }, 20000);
  };
  ws.onmessage = (e) => {
    try {
      const msg = JSON.parse(e.data);
      if(msg.event === 'broadcast' && msg.payload?.type === 'dm') onMsg(msg.payload);
    } catch(err){}
  };
  ws.onerror = () => {};
  return ws;
}
function dmSend(channel, payload){
  if(!_dmWs || _dmWs.readyState !== 1) return;
  _dmWs.send(JSON.stringify({
    topic: 'realtime:' + channel,
    event: 'broadcast',
    payload: { type:'dm', ...payload },
    ref: Date.now() + ''
  }));
}

// ── Panel open / close ────────────────────────────────────────
function openDmPanel(friendId, friendName, friendAvatar, isOnlineFriend){
  sfxClick();
  _dmActiveFriendId     = friendId;
  _dmActiveFriendName   = friendName;
  _dmActiveFriendOnline = isOnlineFriend;
  _dmPanelOpen          = true;

  // Clear unread for this friend
  DM_UNREAD[friendId] = 0;
  dmUpdateFriendsBadge();

  // Header
  document.getElementById('dmHeaderAvatar').textContent = friendAvatarEmoji(friendAvatar);
  document.getElementById('dmHeaderName').textContent   = friendName;
  const statusEl = document.getElementById('dmHeaderStatus');
  if(isOnlineFriend){
    statusEl.textContent = '● ONLINE';
    statusEl.className = 'dm-header-status online';
  } else {
    statusEl.textContent = '● OFFLINE';
    statusEl.className = 'dm-header-status';
  }

  // Input row
  const input   = document.getElementById('dmInput');
  const sendBtn = document.getElementById('dmSendBtn');
  input.disabled   = !isOnlineFriend;
  sendBtn.disabled = !isOnlineFriend;
  input.placeholder = isOnlineFriend ? 'TYPE A MESSAGE...' : 'FRIEND IS OFFLINE';

  // Connect sender WS (even if offline, so we're ready)
  if(AUTH.user){
    _dmChannel = dmChannelName(AUTH.user.id, friendId);
    dmConnect(_dmChannel, (payload) => {
      // Global WS handles incoming display — panel WS only used for sending
      // (ignore echoes here to avoid double display)
    });
  }

  renderDmBody();

  document.getElementById('dmBackdrop').classList.add('open');
  document.getElementById('dmPanel').classList.add('open');
  if(isOnlineFriend) setTimeout(() => input.focus(), 300);
  setTimeout(scrollDmToBottom, 350);
}

function closeDmPanel(){
  sfxClick();
  _dmPanelOpen = false;
  document.getElementById('dmBackdrop').classList.remove('open');
  document.getElementById('dmPanel').classList.remove('open');
  if(_dmWs){ try{ _dmWs.close(); }catch(e){} _dmWs = null; }
  _dmChannel = null;
  // Messages stay in DM_STORE until page reload (ephemeral)
  setTimeout(() => {
    document.getElementById('dmBackdrop').style.display = 'none';
    setTimeout(() => document.getElementById('dmBackdrop').style.display = '', 50);
  }, 350);
  _dmActiveFriendId = null;
}

// ── Render ────────────────────────────────────────────────────
function renderDmBody(){
  const body = document.getElementById('dmBody');
  body.innerHTML = '';

  if(!_dmActiveFriendOnline && (!DM_STORE[_dmActiveFriendId] || DM_STORE[_dmActiveFriendId].length === 0)){
    body.innerHTML = `
      <div class="dm-offline-msg">
        <div class="dm-offline-icon">📵</div>
        <div>${_dmActiveFriendName} IS OFFLINE</div>
        <div style="color:#222;font-size:6px;letter-spacing:2px;line-height:2.5;">
          YOU CAN ONLY SEND MESSAGES<br>WHEN THEY ARE ONLINE
        </div>
      </div>`;
    return;
  }

  const msgContainer = document.createElement('div');
  msgContainer.className = 'dm-messages';
  msgContainer.id = 'dmMessages';

  const msgs = DM_STORE[_dmActiveFriendId] || [];
  if(msgs.length === 0){
    const sys = document.createElement('div');
    sys.className = 'dm-system';
    sys.textContent = '— START OF CONVERSATION —';
    msgContainer.appendChild(sys);
  } else {
    msgs.forEach(m => msgContainer.appendChild(buildDmBubble(m)));
  }

  body.appendChild(msgContainer);

  if(!_dmActiveFriendOnline){
    const notice = document.createElement('div');
    notice.className = 'dm-system';
    notice.style.cssText = 'color:#442200;padding:8px 14px;border-top:1px solid #1a0a00;';
    notice.textContent = '⚠ FRIEND IS OFFLINE — CANNOT SEND';
    body.appendChild(notice);
  }
}

function buildDmBubble(m){
  const wrap = document.createElement('div');
  wrap.className = 'dm-msg ' + (m.mine ? 'mine' : 'theirs');
  wrap.innerHTML = `
    <div class="dm-bubble">${escapeHtml(m.text)}</div>
    <div class="dm-time">${m.time}</div>
  `;
  return wrap;
}

function sendDm(){
  if(!_dmActiveFriendOnline) return;
  const input = document.getElementById('dmInput');
  const text  = (input.value || '').trim();
  if(!text) return;

  sfxCoin();
  input.value = '';

  const time = dmNow();
  const msg  = { mine: true, text, time };

  if(!DM_STORE[_dmActiveFriendId]) DM_STORE[_dmActiveFriendId] = [];
  DM_STORE[_dmActiveFriendId].push(msg);

  // Append bubble immediately
  const container = document.getElementById('dmMessages');
  if(container){
    container.appendChild(buildDmBubble(msg));
    scrollDmToBottom();
  }

  // Broadcast over Supabase Realtime
  if(_dmChannel && _dmWs && _dmWs.readyState === 1){
    dmSend(_dmChannel, {
      senderId:     AUTH.user?.id || 'guest',
      senderName:   AUTH.profile?.username || 'PLAYER',
      senderAvatar: AUTH.profile?.avatar || 'card',
      text,
      time
    });
    setTimeout(() => {
      const sys = document.createElement('div');
      sys.className = 'dm-system';
      sys.textContent = '✓ SENT';
      const c = document.getElementById('dmMessages');
      if(c){ c.appendChild(sys); scrollDmToBottom(); }
    }, 300);
  }
}

function scrollDmToBottom(){
  const container = document.getElementById('dmMessages');
  if(container) container.scrollTop = container.scrollHeight;
}

// ══════════════════════════════════════════════════════════════
// PARTY INVITE SYSTEM
// ══════════════════════════════════════════════════════════════

// Send a party invite to a friend via their DM channel
async function mpInviteFriend(friendId, friendName, btnEl){
  if(!AUTH.user || !MP.roomCode) return;
  btnEl.textContent = 'SENT ✓';
  btnEl.classList.add('sent');
  btnEl.disabled = true;
  sfxCoin();

  // Reuse the DM global WS to broadcast invite on that friend's channel
  const channel = 'realtime:' + dmChannelName(AUTH.user.id, friendId);
  if(!_dmGlobalWs || _dmGlobalWs.readyState !== 1){
    btnEl.textContent = 'FAILED';
    return;
  }
  _dmGlobalWs.send(JSON.stringify({
    topic: channel,
    event: 'broadcast',
    payload: {
      type:         'party_invite',
      senderId:     AUTH.user.id,
      senderName:   AUTH.profile?.username || MP.myNick || 'PLAYER',
      senderAvatar: AUTH.profile?.avatar   || 'card',
      roomCode:     MP.roomCode,
      nick:         MP.myNick
    },
    ref: Date.now() + ''
  }));

  // Auto-reset button after 30s so they can re-invite
  setTimeout(() => {
    if(!btnEl.parentNode) return;
    btnEl.textContent = '+ INVITE';
    btnEl.classList.remove('sent');
    btnEl.disabled = false;
  }, 30000);
}

// Show the invite friends list inside the lobby
async function mpRenderInviteList(){
  const list = document.getElementById('mpInviteList');
  if(!list) return;
  if(!AUTH.user || AUTH.isGuest){
    list.innerHTML = '<div style="font-family:\'Press Start 2P\',monospace;font-size:7px;color:#333;padding:6px;letter-spacing:1px;">LOG IN TO INVITE</div>';
    return;
  }

  list.innerHTML = '<div style="font-family:\'Press Start 2P\',monospace;font-size:7px;color:#444;padding:4px 0;letter-spacing:1px;">LOADING...</div>';

  const ships = await getFriendships();
  const myId  = AUTH.user.id;
  const friendIds = ships
    .filter(s => s.status === 'accepted')
    .map(s => s.requester_id === myId ? s.receiver_id : s.requester_id);

  if(!friendIds.length){
    list.innerHTML = '<div style="font-family:\'Press Start 2P\',monospace;font-size:7px;color:#333;padding:6px;letter-spacing:1px;">NO FRIENDS YET</div>';
    return;
  }

  const profiles = await getProfilesByIds(friendIds);
  const onlineFriends = profiles.filter(p => isOnline(p.last_seen));

  if(!onlineFriends.length){
    list.innerHTML = '<div style="font-family:\'Press Start 2P\',monospace;font-size:7px;color:#333;padding:6px;letter-spacing:1px;">NO FRIENDS ONLINE</div>';
    return;
  }

  const isFull = MP.players.length >= 4;
  list.innerHTML = '';
  onlineFriends.forEach(prof => {
    const alreadyIn = MP.players.some(p => p.id === prof.id);
    const row = document.createElement('div');
    row.className = 'mp-invite-row';
    row.innerHTML = `
      <div class="mp-invite-avatar">${friendAvatarEmoji(prof.avatar)}</div>
      <div class="mp-invite-name">${prof.username}</div>
      <button class="mp-invite-btn${alreadyIn ? ' sent' : (isFull ? ' full' : '')}"
        ${alreadyIn || isFull ? 'disabled' : ''}
        onclick="mpInviteFriend('${prof.id}','${prof.username}',this)">
        ${alreadyIn ? 'IN ROOM ✓' : (isFull ? 'FULL' : '+ INVITE')}
      </button>
    `;
    list.appendChild(row);
  });
}

let _mpInviteTabOpen = false;
function mpToggleInviteTab(){
  sfxClick();
  _mpInviteTabOpen = !_mpInviteTabOpen;
  const drawer = document.getElementById('mpInviteDrawer');
  const arrow  = document.getElementById('mpInviteTabArrow');
  if(_mpInviteTabOpen){
    drawer.style.maxHeight = '200px';
    arrow.style.transform  = 'rotate(180deg)';
    mpRenderInviteList(); // fresh load every time tab opens
  } else {
    drawer.style.maxHeight = '0';
    arrow.style.transform  = 'rotate(0deg)';
  }
}

// Handle incoming party invite notification (called from global DM WS handler)
function mpHandleIncomingInvite(payload){
  // Don't show if already in a game/lobby
  if(MP.active) return;
  sfxWin();

  const notifId = 'partyInvite_' + payload.senderId;
  const existing = document.getElementById(notifId);
  if(existing) existing.remove();

  const notif = document.createElement('div');
  notif.id = notifId;
  notif.style.cssText = `
    position:fixed;
    top:clamp(70px,10vh,90px);
    right:12px;
    z-index:9100;
    background:#0a0a1a;
    border:3px solid #6644FF;
    box-shadow:4px 4px 0 #330088, 0 0 24px rgba(100,68,255,0.35);
    font-family:'Press Start 2P',monospace;
    display:flex;
    flex-direction:column;
    gap:8px;
    padding:12px 14px;
    max-width:clamp(220px,60vw,300px);
    animation:partyInviteIn 0.3s cubic-bezier(0.22,1,0.36,1);
  `;
  notif.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;">
      <div style="font-size:20px;flex-shrink:0;">${friendAvatarEmoji(payload.senderAvatar)}</div>
      <div style="display:flex;flex-direction:column;gap:3px;flex:1;min-width:0;">
        <div style="font-size:clamp(6px,0.8vw,8px);color:#aaaaFF;letter-spacing:1px;">🎮 PARTY INVITE</div>
        <div style="font-size:clamp(5px,0.7vw,7px);color:#FFD700;letter-spacing:0.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
          ${escapeHtml(payload.senderName)} INVITED YOU
        </div>
      </div>
    </div>
    <div style="display:flex;gap:6px;">
      <button onclick="mpAcceptInvite('${payload.roomCode}','${payload.nick || payload.senderName}','${notifId}')"
        style="flex:1;font-family:'Press Start 2P',monospace;font-size:clamp(6px,0.8vw,8px);
          background:#228B22;color:#fff;border:none;padding:7px 4px;cursor:pointer;
          box-shadow:0 3px 0 #145214;letter-spacing:1px;">
        ✓ JOIN
      </button>
      <button onclick="mpDeclineInvite('${notifId}')"
        style="flex:1;font-family:'Press Start 2P',monospace;font-size:clamp(6px,0.8vw,8px);
          background:#CC0000;color:#fff;border:none;padding:7px 4px;cursor:pointer;
          box-shadow:0 3px 0 #880000;letter-spacing:1px;">
        ✕ IGNORE
      </button>
    </div>
    <div style="font-size:6px;color:#333;letter-spacing:1px;text-align:center;" id="${notifId}_timer">
      EXPIRES IN 30s
    </div>
  `;

  document.body.appendChild(notif);

  // Countdown timer
  let secs = 30;
  const iv = setInterval(() => {
    secs--;
    const timerEl = document.getElementById(notifId + '_timer');
    if(timerEl) timerEl.textContent = 'EXPIRES IN ' + secs + 's';
    if(secs <= 0){
      clearInterval(iv);
      mpDeclineInvite(notifId);
    }
  }, 1000);
  notif._countdownIv = iv;
}

async function mpAcceptInvite(roomCode, hostNick, notifId){
  sfxCoin();
  const notif = document.getElementById(notifId);
  if(notif){ clearInterval(notif._countdownIv); notif.remove(); }

  // Need a nickname — use profile username or ask
  if(!MP.myNick){
    MP.myNick = AUTH.profile?.username || 'PLAYER';
  }
  MP.myId = MP.myId || genId();

  // Navigate to multiplayer screen and auto-join
  goTo('multiplayer');
  mpHideAll();
  document.getElementById('mpNickWrap').style.display = '';
  document.getElementById('mpNickInput').value = MP.myNick;
  mpSetStatus('JOINING ' + hostNick + '\'s ROOM...');

  // Small delay so UI renders, then join
  setTimeout(async () => {
    document.getElementById('mpCodeInput') && (document.getElementById('mpCodeInput').value = roomCode);
    // Directly invoke join logic
    mpSetStatus('JOINING...');
    const rows = await supaGet('mp_rooms?code=eq.' + roomCode + '&state=eq.waiting');
    if(!rows || rows.length === 0){
      mpSetStatus('ROOM GONE — TRY AGAIN');
      return;
    }
    const room = rows[0];
    const players = JSON.parse(room.players);
    if(players.length >= 4){ mpSetStatus('ROOM IS FULL!'); return; }

    MP.isHost  = false;
    MP.roomCode = roomCode;
    MP.mySlot  = players.length;
    MP.gameStarted = false;
    MP.seqOut = 0; MP.seqIn = {}; MP.inputQueue = [];
    players.push({ id: MP.myId, nick: MP.myNick, slot: MP.mySlot });
    MP.players = players;

    await supaFetch('PATCH', 'mp_rooms?code=eq.' + roomCode, { players: JSON.stringify(players) });
    mpConnect(MP.roomCode, mpOnMsg);

    setTimeout(() => {
      mpSend('joined', { players: JSON.stringify(players) });
    }, 600);

    mpShowLobby();
    mpSetStatus('');
  }, 400);
}

function mpDeclineInvite(notifId){
  const notif = document.getElementById(notifId);
  if(!notif) return;
  clearInterval(notif._countdownIv);
  notif.style.animation = 'partyInviteOut 0.3s ease forwards';
  setTimeout(() => notif.remove(), 300);
}


// ── Main open function ──
async function openFriends(){
  sfxClick();
  goTo('friends-screen');
  await loadFriendsScreen();
}

async function loadFriendsScreen(){
  if(!AUTH.user) return;

  // Update own last_seen
  updateLastSeen();

  const ships = await getFriendships();
  const myId = AUTH.user.id;

  const accepted = ships.filter(s => s.status === 'accepted');
  const incoming = ships.filter(s => s.status === 'pending' && s.receiver_id === myId);
  const sent     = ships.filter(s => s.status === 'pending' && s.requester_id === myId);

  // Update request badge
  const badge = document.getElementById('friendsBadge');
  const countEl = document.getElementById('requestCount');
  if(incoming.length > 0){
    if(badge){ badge.textContent = incoming.length; badge.classList.add('show'); }
    if(countEl) countEl.textContent = ' ('+incoming.length+')';
  } else {
    if(badge) badge.classList.remove('show');
    if(countEl) countEl.textContent = '';
  }

  // Collect all profile IDs to fetch
  const friendIds = accepted.map(s => s.requester_id === myId ? s.receiver_id : s.requester_id);
  const incomingIds = incoming.map(s => s.requester_id);
  const sentIds = sent.map(s => s.receiver_id);
  const allIds = [...new Set([...friendIds, ...incomingIds, ...sentIds])];

  const profiles = allIds.length ? await getProfilesByIds(allIds) : [];
  const profileMap = {};
  profiles.forEach(p => profileMap[p.id] = p);

  // Render friends list
  const friendsList = document.getElementById('friendsList');
  friendsList.innerHTML = '';
  if(friendIds.length === 0){
    friendsList.innerHTML = '<div class="friends-empty">NO FRIENDS YET<br>ADD SOMEONE!</div>';
  } else {
    accepted.forEach(s => {
      const fid = s.requester_id === myId ? s.receiver_id : s.requester_id;
      const prof = profileMap[fid];
      if(prof) friendsList.appendChild(buildFriendRow(prof, s, 'friend'));
    });
  }

  // Render requests
  const requestsList = document.getElementById('requestsList');
  requestsList.innerHTML = '';
  if(incoming.length === 0){
    requestsList.innerHTML = '<div class="friends-empty">NO INCOMING REQUESTS</div>';
  } else {
    incoming.forEach(s => {
      const prof = profileMap[s.requester_id];
      if(prof) requestsList.appendChild(buildFriendRow(prof, s, 'incoming'));
    });
  }

  const sentList = document.getElementById('sentList');
  sentList.innerHTML = '';
  if(sent.length === 0){
    sentList.innerHTML = '<div class="friends-empty" style="padding:8px 0;">NONE</div>';
  } else {
    sent.forEach(s => {
      const prof = profileMap[s.receiver_id];
      if(prof) sentList.appendChild(buildFriendRow(prof, s, 'sent'));
    });
  }
}

function switchFriendsTab(tab){
  sfxClick();
  _friendsTab = tab;
  ['friends','requests','add'].forEach(t => {
    document.getElementById('ftab'+t.charAt(0).toUpperCase()+t.slice(1)).classList.toggle('active', t===tab);
    document.getElementById('friendsTab'+t.charAt(0).toUpperCase()+t.slice(1)).style.display = (t===tab)?'flex':'none';
  });
  // Fix: tabs need flex direction column
  const active = document.getElementById('friendsTab'+tab.charAt(0).toUpperCase()+tab.slice(1));
  if(active) active.style.flexDirection = 'column';
}

async function searchFriend(){
  sfxClick();
  const input = document.getElementById('friendSearchInput');
  const query = (input?.value || '').trim().toUpperCase();
  const resultEl = document.getElementById('searchResult');
  if(!query){ resultEl.innerHTML = '<div class="friends-empty">TYPE A USERNAME</div>'; return; }
  if(query === (AUTH.profile?.username || '').toUpperCase()){
    resultEl.innerHTML = '<div class="friends-empty">THAT\'S YOU!</div>'; return;
  }
  resultEl.innerHTML = '<div class="friends-empty">SEARCHING...</div>';

  const profile = await searchProfileByUsername(query);
  if(!profile){
    resultEl.innerHTML = '<div class="friends-empty">NO PLAYER FOUND<br>CHECK THE USERNAME</div>';
    return;
  }

  // Check if already friends or request pending
  const ships = await getFriendships();
  const myId = AUTH.user.id;
  const existing = ships.find(s =>
    (s.requester_id === myId && s.receiver_id === profile.id) ||
    (s.receiver_id === myId && s.requester_id === profile.id)
  );

  resultEl.innerHTML = '';
  const rank = getRankByXp(profile.xp || 0);
  const card = document.createElement('div');
  card.className = 'friend-row';

  let btnHtml = '';
  if(existing){
    if(existing.status === 'accepted') btnHtml = '<div style="font-family:monospace;font-size:7px;color:#44FF88;letter-spacing:1px;">FRIENDS ✓</div>';
    else if(existing.status === 'pending' && existing.requester_id === myId) btnHtml = '<div style="font-family:monospace;font-size:7px;color:#C9A84C;letter-spacing:1px;">SENT ✓</div>';
    else btnHtml = `<button class="friend-action-btn fab-accept" onclick="acceptFriendFromSearch('${existing.id}', this)">ACCEPT</button>`;
  } else {
    btnHtml = `<button class="friend-action-btn fab-accept" onclick="sendRequestFromSearch('${profile.id}', this)">+ ADD</button>`;
  }

  card.innerHTML = `
    <div class="friend-avatar">${friendAvatarEmoji(profile.avatar)}</div>
    <div class="friend-info">
      <div class="friend-name">${profile.username}</div>
      <div class="friend-rank">${rank.emoji} ${rank.name} · ${profile.xp || 0} XP</div>
    </div>
    ${btnHtml}
  `;
  resultEl.appendChild(card);
}

async function sendRequestFromSearch(receiverId, btn){
  sfxCoin();
  btn.textContent = 'SENDING...';
  btn.disabled = true;
  const ok = await sendFriendRequest(receiverId);
  btn.textContent = ok ? 'SENT ✓' : 'FAILED';
  btn.disabled = true;
}

async function acceptFriendFromSearch(friendshipId, btn){
  sfxCoin();
  btn.textContent = '...';
  btn.disabled = true;
  const ok = await acceptFriendRequest(friendshipId);
  btn.textContent = ok ? 'FRIENDS ✓' : 'FAILED';
  btn.disabled = true;
  if(ok) await loadFriendsScreen();
}

async function acceptFriend(friendshipId){
  sfxCoin();
  await acceptFriendRequest(friendshipId);
  await loadFriendsScreen();
}

async function declineFriend(friendshipId){
  sfxClick();
  await deleteFriendship(friendshipId);
  await loadFriendsScreen();
}

async function removeFriend(friendshipId){
  sfxClick();
  await deleteFriendship(friendshipId);
  await loadFriendsScreen();
}

async function cancelRequest(friendshipId){
  sfxClick();
  await deleteFriendship(friendshipId);
  await loadFriendsScreen();
}

// Update friends badge count on menu
async function refreshFriendsBadge(){
  if(!AUTH.user || AUTH.isGuest) return;
  const ships = await getFriendships();
  const incoming = ships.filter(s => s.status === 'pending' && s.receiver_id === AUTH.user.id);
  const badge = document.getElementById('friendsBadge');
  if(badge){
    if(incoming.length > 0){ badge.textContent = incoming.length; badge.classList.add('show'); }
    else { badge.classList.remove('show'); }
  }
}

// ── Auto-restore session on load ──
async function authInit(){
  const { accessToken, userId } = authLoadSession();
  if(!accessToken || !userId) return false;
  try {
    const r = await supaAuthFetch('GET', '/auth/v1/user', null, accessToken);
    if(!r.ok){ authClearSession(); return false; }
    const user = await r.json();
    AUTH.user = user;
    AUTH.isGuest = false;
    // Load profile fresh from DB — always the source of truth
    AUTH.profile = await supaGetProfile(userId, accessToken);
    if(!AUTH.profile){
      // Profile row missing — create it now
      const name = (user.email || 'player').split('@')[0].toUpperCase().slice(0,14);
      await supaAuthFetch('POST', '/rest/v1/profiles',
        { id: userId, username: name, avatar: 'card', xp: 0 },
        accessToken
      );
      AUTH.profile = await supaGetProfile(userId, accessToken);
    }
    if(!AUTH.profile) AUTH.profile = { username: 'PLAYER', avatar: 'card', xp: 0 };
    updateProfileChip();
    setTimeout(positionFriendsBtn, 100);
    refreshFriendsBadge();
    dmStartGlobalListener();
    return true;
  } catch(e){
    console.error('authInit failed:', e);
    authClearSession();
    return false;
  }
}

// ============================================================
// SUPABASE CONFIG
// ============================================================
// SUPABASE SETUP — run this SQL once in your Supabase SQL editor:
/*
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null,
  avatar text default 'card',
  xp integer default 0,
  created_at timestamp with time zone default now()
);
alter table profiles enable row level security;
create policy "Users can read own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on profiles for insert with check (auth.uid() = id);
*/
const SUPABASE_URL = 'https://oxyonfgbxidleoisfmwb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94eW9uZmdieGlkbGVvaXNmbXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MDA3NzgsImV4cCI6MjA4NzA3Njc3OH0.1W6wKVd-qA60N-54THrw_6e0R9V_0hSkDQSf1y0STbI';

// ============================================================
// MULTIPLAYER STATE
// MODIFIED: Added sequencing, input queue, and host-authority fields
// ============================================================
const MP = {
  active: false,
  isHost: false,
  roomCode: null,
  myId: null,
  myNick: null,
  mySlot: 0,
  players: [],
  ws: null,

  // ADDED: Host-authoritative model fields
  // seqOut: outgoing sequence counter (host uses this for snapshots)
  seqOut: 0,
  // seqIn: last processed incoming sequence (prevents duplicate/out-of-order)
  seqIn: {},           // { senderId -> lastSeq }
  // inputQueue: pending input messages to be processed in next tick (never mutate G directly in onmessage)
  inputQueue: [],
  // gameStarted: guard so game init only runs once (fixes race condition)
  gameStarted: false,
  // ADDED: snapshotDirty — set to true whenever G changes on host side
  // (AI moves, round transitions, scores). The tick loop checks this and
  // broadcasts a snapshot only when dirty, instead of every 100ms unconditionally.
  snapshotDirty: false,
  // selectedRounds: host's round count choice from lobby picker (default 7)
  selectedRounds: 7,
  // selectedGame: '51' or 'chkobba' (default 51)
  selectedGame: '51',
  // selectedTarget: Chkobba target score (default 31)
  selectedTarget: 31,
  tickInterval: null,
  _lastTimerSlot: -1,
};

function genId(){ return Math.random().toString(36).slice(2,10); }
function genCode(){ return String(Math.floor(1000+Math.random()*9000)); }

// ── Supabase REST helpers ──
async function supaFetch(method, path, body=null){
  const opts = {
    method,
    headers:{
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer '+SUPABASE_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    }
  };
  if(body) opts.body = JSON.stringify(body);
  const r = await fetch(SUPABASE_URL+'/rest/v1/'+path, opts);
  return r;
}

async function supaGet(path){
  const r = await supaFetch('GET', path);
  if(!r.ok) return null;
  return r.json();
}

// ── WebSocket broadcast ──
function mpConnect(code, onMsg){
  const url = SUPABASE_URL.replace('https','wss')+'/realtime/v1/websocket?apikey='+SUPABASE_KEY+'&vsn=1.0.0';
  const ws = new WebSocket(url);
  MP.ws = ws;

  ws.onopen = ()=>{
    ws.send(JSON.stringify({topic:'realtime:room-'+code, event:'phx_join', payload:{}, ref:'1'}));
    setInterval(()=>{
      if(ws.readyState===1) ws.send(JSON.stringify({topic:'phoenix',event:'heartbeat',payload:{},ref:'hb'}));
    },20000);
  };

  ws.onmessage = (e)=>{
    try{
      const msg = JSON.parse(e.data);
      if(msg.event==='broadcast' && msg.payload?.type) onMsg(msg.payload);
    }catch(err){}
  };

  ws.onerror = ()=> mpSetStatus('CONNECTION ERROR');
  return ws;
}

function mpSend(type, data={}){
  if(!MP.ws || MP.ws.readyState!==1) return;
  // MODIFIED: Every outgoing message now carries a sequence number.
  // This allows receivers to detect duplicate and out-of-order packets.
  MP.seqOut++;
  MP.ws.send(JSON.stringify({
    topic: 'realtime:room-'+MP.roomCode,
    event: 'broadcast',
    payload: {type, ...data, _from: MP.myId, _seq: MP.seqOut},
    ref: Date.now()+''
  }));
}

// ── UI helpers ──
function mpSetStatus(t){ document.getElementById('mpStatus').textContent=t; }

function mpHideAll(){
  ['mpNickWrap','mpChoiceWrap','mpJoinWrap','mpLobbyWrap'].forEach(id=>{
    document.getElementById(id).style.display='none';
  });
}

// ── Flow ──
function mpOpen(){
  MP.myId = genId();
  goTo('multiplayer');
  mpHideAll();
  document.getElementById('mpNickWrap').style.display='';
  document.getElementById('mpNickInput').value = MP.myNick||'';
  mpSetStatus('');
}

function mpConfirmNick(){
  const nick = document.getElementById('mpNickInput').value.trim().toUpperCase();
  if(!nick){ mpSetStatus('ENTER A NICKNAME!'); return; }
  MP.myNick = nick;
  mpHideAll();
  document.getElementById('mpChoiceWrap').style.display='';
  document.getElementById('mpNickDisplay').textContent = nick;
  mpSetStatus('');
}

function mpShowChoice(){
  mpHideAll();
  document.getElementById('mpChoiceWrap').style.display='';
  mpSetStatus('');
}

function mpShowJoin(){
  mpHideAll();
  document.getElementById('mpJoinWrap').style.display='';
  document.getElementById('mpCodeInput').value='';
  document.getElementById('mpJoinError').style.display='none';
  mpSetStatus('');
}

async function mpHost(){
  mpSetStatus('CREATING ROOM...');
  MP.isHost = true;
  MP.roomCode = genCode();
  MP.mySlot = 0;
  MP.players = [{id:MP.myId, nick:MP.myNick, slot:0}];
  // ADDED: Reset game-start guard for new session
  MP.gameStarted = false;
  MP.selectedRounds = 7;
  MP.seqOut = 0; MP.seqIn = {}; MP.inputQueue = [];

  const r = await supaFetch('POST','mp_rooms',{
    code: MP.roomCode,
    host_id: MP.myId,
    players: JSON.stringify(MP.players),
    state: 'waiting'
  });

  if(!r.ok){ mpSetStatus('ERROR: '+await r.text()); return; }

  mpConnect(MP.roomCode, mpOnMsg);
  mpShowLobby();
  mpSetStatus('');
}

async function mpJoin(){
  const code = document.getElementById('mpCodeInput').value.trim();
  if(code.length!==4){ mpSetStatus('ENTER 4-DIGIT CODE'); return; }
  mpSetStatus('JOINING...');

  const rows = await supaGet('mp_rooms?code=eq.'+code+'&state=eq.waiting');
  if(!rows || rows.length===0){
    document.getElementById('mpJoinError').style.display='';
    mpSetStatus('');
    return;
  }

  const room = rows[0];
  const players = JSON.parse(room.players);
  if(players.length>=4){ mpSetStatus('ROOM FULL!'); return; }

  MP.isHost = false;
  MP.roomCode = code;
  MP.mySlot = players.length;
  // ADDED: Reset sequencing/input state for clean join
  MP.gameStarted = false;
  MP.seqOut = 0; MP.seqIn = {}; MP.inputQueue = [];
  players.push({id:MP.myId, nick:MP.myNick, slot:MP.mySlot});
  MP.players = players;

  await supaFetch('PATCH','mp_rooms?code=eq.'+code,{players:JSON.stringify(players)});

  mpConnect(MP.roomCode, mpOnMsg);

  // Tell others after WS connects
  setTimeout(()=>{
    mpSend('joined',{players:JSON.stringify(players)});
  },600);

  mpShowLobby();
  mpSetStatus('');
}

function mpShowLobby(){
  mpHideAll();
  document.getElementById('mpLobbyWrap').style.display='';
  document.getElementById('mpRoomCode').textContent = MP.roomCode;
  document.getElementById('mpStartWrap').style.display = MP.isHost ? '' : 'none';
  document.getElementById('mpWaitMsg').style.display = MP.isHost ? 'none' : '';
  
  // Show game selector and correct settings for host
  if(MP.isHost){
    document.getElementById('mpGameWrap').style.display='';
    const rTW=document.getElementById('mpRamiTargetWrap');
    if(MP.selectedGame === 'chkobba'){
      document.getElementById('mpRoundsWrap').style.display='none';
      document.getElementById('mpTargetWrap').style.display='';
      if(rTW)rTW.style.display='none';
    } else if(MP.selectedGame === 'rami'){
      document.getElementById('mpRoundsWrap').style.display='none';
      document.getElementById('mpTargetWrap').style.display='none';
      if(rTW)rTW.style.display='';
    } else {
      document.getElementById('mpRoundsWrap').style.display='';
      document.getElementById('mpTargetWrap').style.display='none';
      if(rTW)rTW.style.display='none';
    }
  } else {
    document.getElementById('mpGameWrap').style.display='none';
    document.getElementById('mpRoundsWrap').style.display='none';
    document.getElementById('mpTargetWrap').style.display='none';
    const rTW2=document.getElementById('mpRamiTargetWrap');if(rTW2)rTW2.style.display='none';
  }
  
  mpRenderLobby();
  // Reset invite tab state
  _mpInviteTabOpen = false;
  const drawer = document.getElementById('mpInviteDrawer');
  const arrow  = document.getElementById('mpInviteTabArrow');
  if(drawer) drawer.style.maxHeight = '0';
  if(arrow)  arrow.style.transform  = 'rotate(0deg)';
}

function mpSelGame(btn){
  sfxClick();
  document.querySelectorAll('#mpGameWrap .mp-sel-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  MP.selectedGame = btn.dataset.game;
  
  // Show/hide correct settings
  const roundsWrap = document.getElementById('mpRoundsWrap');
  const targetWrap = document.getElementById('mpTargetWrap');
  const ramiTargetWrap = document.getElementById('mpRamiTargetWrap');
  if(MP.selectedGame === 'chkobba'){
    if(roundsWrap) roundsWrap.style.display='none';
    if(targetWrap) targetWrap.style.display='';
    if(ramiTargetWrap) ramiTargetWrap.style.display='none';
  } else if(MP.selectedGame === 'rami'){
    if(roundsWrap) roundsWrap.style.display='none';
    if(targetWrap) targetWrap.style.display='none';
    if(ramiTargetWrap) ramiTargetWrap.style.display='';
    if(!MP.selectedRamiTarget) MP.selectedRamiTarget = 101;
  } else {
    if(roundsWrap) roundsWrap.style.display='';
    if(targetWrap) targetWrap.style.display='none';
    if(ramiTargetWrap) ramiTargetWrap.style.display='none';
  }
  
  // Broadcast settings to guests
  if(MP.isHost){
    mpSend('settings', {
      game: MP.selectedGame,
      rounds: MP.selectedRounds,
      target: MP.selectedTarget,
      ramiTarget: MP.selectedRamiTarget || 101
    });
  }
}

function mpSelRamiTarget(btn){
  sfxClick();
  document.querySelectorAll('#mpRamiTargetWrap .mp-sel-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  MP.selectedRamiTarget = parseInt(btn.dataset.v);
  if(MP.isHost){
    mpSend('settings', {
      game: MP.selectedGame,
      rounds: MP.selectedRounds,
      target: MP.selectedTarget,
      ramiTarget: MP.selectedRamiTarget
    });
  }
}

function mpSelTarget(btn){
  sfxClick();
  document.querySelectorAll('#mpTargetWrap .mp-sel-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  MP.selectedTarget = parseInt(btn.dataset.v);
  
  // Broadcast settings to guests
  if(MP.isHost){
    mpSend('settings', {
      game: MP.selectedGame,
      rounds: MP.selectedRounds,
      target: MP.selectedTarget
    });
  }
}

function mpSelRounds(btn){
  sfxClick();
  document.querySelectorAll('#mpRoundsWrap .mp-sel-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  MP.selectedRounds = parseInt(btn.dataset.v);
  
  // Broadcast settings to guests
  if(MP.isHost){
    mpSend('settings', {
      game: MP.selectedGame,
      rounds: MP.selectedRounds,
      target: MP.selectedTarget
    });
  }
}

function mpRenderLobby(){
  const list = document.getElementById('mpPlayersList');
  list.innerHTML='';
  MP.players.forEach(p=>{
    const row = document.createElement('div');
    row.className='mp-player-row'+(p.id===MP.players[0].id?' host':'');
    const isMe = p.id===MP.myId;
    const kickBtn = (MP.isHost && p.id!==MP.myId) ? '<button class="mp-kick-btn" onclick="mpKick(\'' + p.id + '\')">KICK</button>' : '';
    const crown = (p.id===MP.players[0].id) ? '★ ' : '› ';
    row.innerHTML = '<span class="mp-player-name">' + crown + p.nick + (isMe?' (YOU)':'') + '</span>' + kickBtn;
    list.appendChild(row);
  });
  
  // Show/hide correct UI elements based on host/guest
  if(MP.isHost){
    document.getElementById('mpStartBtn').textContent='▶ START ('+MP.players.length+'/4)';
    document.getElementById('mpGameWrap').style.display='';
    document.getElementById('mpStartWrap').style.display='';
    document.getElementById('mpWaitMsg').style.display='none';
    document.getElementById('mpGuestSettings').style.display='none';
    
    // Show correct settings panel
    if(MP.selectedGame === 'chkobba'){
      document.getElementById('mpRoundsWrap').style.display='none';
      document.getElementById('mpTargetWrap').style.display='';
      const rTW=document.getElementById('mpRamiTargetWrap');if(rTW)rTW.style.display='none';
    } else if(MP.selectedGame === 'rami'){
      document.getElementById('mpRoundsWrap').style.display='none';
      document.getElementById('mpTargetWrap').style.display='none';
      const rTW=document.getElementById('mpRamiTargetWrap');if(rTW)rTW.style.display='';
    } else {
      document.getElementById('mpRoundsWrap').style.display='';
      document.getElementById('mpTargetWrap').style.display='none';
      const rTW=document.getElementById('mpRamiTargetWrap');if(rTW)rTW.style.display='none';
    }
  } else {
    // Guest view
    document.getElementById('mpGameWrap').style.display='none';
    document.getElementById('mpRoundsWrap').style.display='none';
    document.getElementById('mpTargetWrap').style.display='none';
    const rTW=document.getElementById('mpRamiTargetWrap');if(rTW)rTW.style.display='none';
    document.getElementById('mpStartWrap').style.display='none';
    document.getElementById('mpWaitMsg').style.display='';
    document.getElementById('mpGuestSettings').style.display='';
  }
}

function mpOnMsg(msg){
  if(msg._from===MP.myId) return; // ignore own messages

  // ADDED: Out-of-order / duplicate protection.
  // Track the highest sequence seen per sender; discard older ones.
  if(msg._seq !== undefined){
    const lastSeen = MP.seqIn[msg._from] || 0;
    if(msg._seq <= lastSeen){
      return; // DISCARD: already processed a newer or equal packet from this sender
    }
    MP.seqIn[msg._from] = msg._seq;
  }

  switch(msg.type){
    case 'joined':
      // Lobby-only message; safe to apply directly (not in game)
      MP.players = JSON.parse(msg.players);
      mpRenderLobby();
      mpSetStatus(MP.players[MP.players.length-1].nick+' JOINED!');
      
      // Host sends current settings to the new player
      if(MP.isHost){
        mpSend('settings', {
          game: MP.selectedGame,
          rounds: MP.selectedRounds,
          target: MP.selectedTarget
        });
      }
      break;

    case 'kicked':
      if(msg.targetId===MP.myId){ mpLeave(); alert('You were kicked.'); }
      else { MP.players=MP.players.filter(p=>p.id!==msg.targetId); mpRenderLobby(); }
      break;

    // MODIFIED: 'start' is only sent by the host (race-condition fix).
    // Client sets gameStarted guard before calling mpBeginGame.
    case 'start':
      if(MP.gameStarted) return;
      MP.gameStarted = true;
      MP.players = JSON.parse(msg.players);
      
      // Check which game and start accordingly
      if(msg.game === 'chkobba'){
        mpBeginChkobba(
          JSON.parse(msg.gamePlayers),
          JSON.parse(msg.table),
          JSON.parse(msg.deck),
          msg.starter,
          msg.targetScore
        );
      } else if(msg.game === 'rami'){
        mpBeginRami(
          JSON.parse(msg.gamePlayers),
          JSON.parse(msg.ramiState),
          msg.ramiTarget
        );
      } else {
        mpBeginGame(JSON.parse(msg.gamePlayers), msg.starter, msg.totalRounds || 7);
      }
      break;

    case 'rematch':
      mpBeginGame(JSON.parse(msg.gamePlayers), msg.starter, msg.totalRounds || 7);
      break;

    case 'rematch_vote':
      // Only host processes votes
      if(!MP.isHost) return;
      if(!MP.rematchVotes) MP.rematchVotes = new Set();
      MP.rematchVotes.add(msg.playerId);
      const totalHumans = G.players.filter(p=>!p.isAI).length;
      const voteCount = MP.rematchVotes.size;
      mpSend('rematch_vote_update', {count: voteCount, total: totalHumans});
      updateRematchStatus(voteCount, totalHumans);
      if(voteCount >= totalHumans) mpDoRematch();
      break;

    case 'rematch_vote_update':
      // All players receive the current vote tally from host
      updateRematchStatus(msg.count, msg.total);
      break;

    case 'ping':
      // Client replies to host ping immediately
      if(!MP.isHost) mpSend('pong', {slot: MP.mySlot, t: msg.t});
      break;

    case 'pong':
      // Host records last pong time for that slot
      if(MP.isHost && MP.lastPong){
        MP.lastPong[msg.slot] = Date.now();
      }
      break;

    // MODIFIED: 'input' replaces the old 'move' message.
    // Network event handlers NEVER mutate G directly; inputs are queued
    // and processed in the host tick loop (mpHostTick).
    case 'input':
      if(!MP.isHost) return; // Only host processes inputs
      // Push to queue; tick loop drains it safely
      MP.inputQueue.push({
        slot: msg.slot,
        card: typeof msg.card === 'string' ? JSON.parse(msg.card) : msg.card,
        choice: msg.choice !== undefined ? msg.choice : null,
        captureIndices: msg.captureIndices !== undefined ? msg.captureIndices : null,
        tick: msg.tick || 0
      });
      break;

    // ADDED: Host sends authoritative snapshots periodically.
    // Client replaces its local G with the snapshot if a mismatch is detected.
    case 'snapshot':
      if(MP.isHost) return;
      try {
        const snap = JSON.parse(msg.state);
        // Play card sound when lastCard changes and it wasn't our own throw
        const prevLastCard = G.lastCard;
        const newLastCard = snap.lastCard;
        const lastCardChanged = newLastCard && (!prevLastCard ||
          prevLastCard.r !== newLastCard.r || prevLastCard.s !== newLastCard.s);
        if(lastCardChanged && snap.cur !== MP.mySlot){
          sfxCard();
        }
        G = snap;
        G.mp = true;
        
        // CHKOBBA: Trigger animations if marked by host
        if(snap._showEl7aya){
          showEl7ayaFlash();
          delete G._showEl7aya; // Clear flag
        }
        if(snap._showChkobba){
          showChkobbaFlash();
          delete G._showChkobba; // Clear flag
        }
        
        // CHKOBBA: Show opponent's last move animation
        if(msg.lastMove){
          const move = JSON.parse(msg.lastMove);
          // Only show if it wasn't our own move
          if(move.playerSlot !== MP.mySlot){
            showOpponentMoveAnimation(move);
          }
        }
        
        renderGame();
        setMsg(msg.statusMsg || '');
        
        // CHKOBBA: Show round results overlay
        if(msg.roundResults){
          const scores = JSON.parse(msg.roundResults);
          showChkobbaRoundResults(scores);
        }
        
        // Guest: start visual timer when turn changes (host sends timerSlot)
        if(msg.timerSlot !== undefined){
          const prevSlot = MP._lastTimerSlot;
          const prevPhase = MP._lastTimerPhase || '';
          const newPhase = (G.gameType==='rami' && G.rami) ? G.rami.playerPhase : '';
          // Restart timer if: turn changed, OR Rami phase changed (draw→play means player drew)
          const shouldRestart = (msg.timerSlot !== prevSlot) ||
                                (G.gameType==='rami' && newPhase !== prevPhase && newPhase === 'play');
          if(shouldRestart && !msg.loserSlot && !msg.gameover){
            MP._lastTimerSlot = msg.timerSlot;
            MP._lastTimerPhase = newPhase;
            mpStartTimer();
          }
        }
        // Show win/lose overlay on client using loserSlot for correct personal perspective
        if(msg.loserSlot !== undefined){
          closeChat(); // Close chat when round ends
          const iAmLoser = (MP.mySlot === msg.loserSlot);
          if(iAmLoser){
            sfxLose();
            showOverlay('ovLose', msg.overlayMsg.replace('BUSTED!', 'REACHED '+msg.loserTotal+'!'), 'OTHERS GET +1');
          } else {
            sfxWin(); launchConfetti();
            showOverlay('ovWin', msg.overlayMsg, 'YOU GET +1 POINT');
          }
        } else if(msg.overlay){
          if(msg.overlay==='win') showOverlay('ovWin', msg.overlayMsg||'', msg.overlaySub||'');
          else if(msg.overlay==='lose') showOverlay('ovLose', msg.overlayMsg||'', msg.overlaySub||'');
          else if(msg.overlay==='hide') hideOverlays();
        }
        // Navigate to gameover screen on client when host does
        if(msg.gameover){
          if(G.gameType === 'rami') ramiEndGame();
          else endGame();
        }
        // Show round banner on guest when new round starts
        if(msg.newRound){ showRoundBanner(snap.round, snap.totalRounds, ()=>{}); }
      } catch(e) {}
      break;

    case 'host_left':
      // Host left — everyone gets kicked, lobby or in-game
      showDisconnectOverlay(msg.nick + ' (HOST)');
      break;

    case 'closed':
      // Legacy fallback
      showDisconnectOverlay('HOST');
      break;

    case 'player_left':
      if(!MP.active) break;
      // Remove that player from the list if still in lobby
      if(!G || !G.gameType){
        MP.players = MP.players.filter(p => p.id !== msg.id);
        mpRenderLobby();
        mpSetStatus((msg.nick || 'A PLAYER') + ' LEFT');
      } else {
        showDisconnectOverlay(msg.nick || 'A PLAYER');
      }
      break;

    case 'chat':
      // Show incoming message from another player
      if(msg.id !== MP.myId){
        addChatMessage(msg.nick, msg.text, false);
        showChatToast(msg.nick, msg.text, false);
      }
      break;
    
    case 'rami_input':
      // Only host processes these — queue for mpHostTick
      if(!MP.isHost) return;
      MP.inputQueue.push({
        slot: msg.slot,
        action: msg.action,
        card: msg.card ? (typeof msg.card==='string'?JSON.parse(msg.card):msg.card) : null,
        melds: msg.melds ? (typeof msg.melds==='string'?JSON.parse(msg.melds):msg.melds) : null,
        meldIndex: msg.meldIndex!==undefined ? msg.meldIndex : null
      });
      break;

    case 'settings':
      // Guest receives host's game settings
      if(!MP.isHost){
        const gameLabel = msg.game === '51' ? 'CINQUANTE ET UN' : msg.game === 'rami' ? 'RAMI' : 'CHKOBBA';
        document.getElementById('mpGuestGame').textContent = gameLabel;
        document.getElementById('mpGuestRounds').textContent = msg.rounds;
        document.getElementById('mpGuestTarget').textContent = msg.target;
        const ramiTargetEl = document.getElementById('mpGuestRamiTarget');
        if(ramiTargetEl) ramiTargetEl.textContent = msg.ramiTarget || 101;
        
        // Show/hide appropriate settings display
        if(msg.game === 'chkobba'){
          document.getElementById('mpGuestRoundsDisplay').style.display='none';
          document.getElementById('mpGuestTargetDisplay').style.display='';
          const rtd=document.getElementById('mpGuestRamiTargetDisplay');if(rtd)rtd.style.display='none';
        } else if(msg.game === 'rami'){
          document.getElementById('mpGuestRoundsDisplay').style.display='none';
          document.getElementById('mpGuestTargetDisplay').style.display='none';
          const rtd=document.getElementById('mpGuestRamiTargetDisplay');if(rtd)rtd.style.display='';
        } else {
          document.getElementById('mpGuestRoundsDisplay').style.display='';
          document.getElementById('mpGuestTargetDisplay').style.display='none';
          const rtd=document.getElementById('mpGuestRamiTargetDisplay');if(rtd)rtd.style.display='none';
        }
      }
      break;
  }
}

async function mpKick(pid){
  MP.players = MP.players.filter(p=>p.id!==pid);
  await supaFetch('PATCH','mp_rooms?code=eq.'+MP.roomCode,{players:JSON.stringify(MP.players)});
  mpSend('kicked',{targetId:pid});
  mpRenderLobby();
}

function mpStartGame(){
  if(!MP.isHost) return;
  if(MP.players.length<2){ mpSetStatus('NEED AT LEAST 2 PLAYERS!'); return; }
  if(MP.gameStarted) return;
  MP.gameStarted = true;

  // Route to correct game based on selection
  if(MP.selectedGame === 'chkobba'){
    mpStartChkobbaGame();
  } else if(MP.selectedGame === 'rami'){
    mpStartRamiGame();
  } else {
    mpStart51Game();
  }
}

function mpStart51Game(){
  // Host generates the FULL shared game state and sends it to everyone
  const aiNames = [AI_NAMES[0], AI_NAMES[1], AI_NAMES[2]];
  const humanCount = MP.players.length;
  const gamePlayers = [];
  for(let i=0;i<4;i++){
    if(i<humanCount){
      gamePlayers.push({id:i, name:MP.players[i].nick, score:0, hand:[], isAI:false, mpId:MP.players[i].id});
    } else {
      gamePlayers.push({id:i, name:aiNames[i-humanCount], score:0, hand:[], isAI:true});
    }
  }

  // Deal cards using shared deck (host is source of truth)
  const deck = shuffle(createDeck());
  let idx=0;
  gamePlayers.forEach(p=>{ p.hand=[]; for(let i=0;i<8;i++) p.hand.push(deck[idx++]); });

  // Find starter (has 7♥)
  let starter=0;
  gamePlayers.forEach((p,i)=>{ if(p.hand.some(c=>c.r==='7'&&c.s==='♥')) starter=i; });

  // MODIFIED: Send 'start' only from host; client waits for this before initializing
  mpSend('start',{
    players: JSON.stringify(MP.players),
    gamePlayers: JSON.stringify(gamePlayers),
    starter: starter,
    totalRounds: MP.selectedRounds || 7
  });
  mpBeginGame(gamePlayers, starter, MP.selectedRounds || 7);
}

function mpStartChkobbaGame(){
  // Create 2 players for Chkobba 1v1
  const humanCount = MP.players.length;
  const gamePlayers = [];
  
  // Player 0 (first player)
  gamePlayers.push({
    id:0, 
    name:MP.players[0].nick, 
    score:0, 
    hand:[], 
    captured:[], 
    chkobbas:0,
    isAI:false, 
    mpId:MP.players[0].id
  });
  
  // Player 1 (second player or AI)
  if(humanCount > 1){
    gamePlayers.push({
      id:1, 
      name:MP.players[1].nick, 
      score:0, 
      hand:[], 
      captured:[], 
      chkobbas:0,
      isAI:false, 
      mpId:MP.players[1].id
    });
  } else {
    gamePlayers.push({
      id:1, 
      name:AI_NAMES[0], 
      score:0, 
      hand:[], 
      captured:[], 
      chkobbas:0,
      isAI:true
    });
  }
  
  // Create Chkobba deck and deal
  const deck = shuffle(createChkobbaDeck());
  let idx=0;
  
  // Deal 3 cards to each player
  gamePlayers.forEach(p=>{ 
    p.hand=[]; 
    for(let i=0;i<3;i++) p.hand.push(deck[idx++]); 
  });
  
  // Place 4 cards on table
  const table = [];
  for(let i=0;i<4;i++) table.push(deck[idx++]);
  
  // Remaining deck
  const remainingDeck = deck.slice(idx);
  
  // Player 0 starts
  const starter = 0;
  
  // Get target score
  const targetScore = MP.selectedTarget || 31;
  
  // Send start message
  mpSend('start',{
    game: 'chkobba',
    players: JSON.stringify(MP.players),
    gamePlayers: JSON.stringify(gamePlayers),
    table: JSON.stringify(table),
    deck: JSON.stringify(remainingDeck),
    starter: starter,
    targetScore: targetScore
  });
  
  mpBeginChkobba(gamePlayers, table, remainingDeck, starter, targetScore);
}

function mpBeginGame(gamePlayers, starter, totalRounds){
  totalRounds = totalRounds || 7;
  updateLanguage(); // Apply current language for all in-game text
  if(!gamePlayers){
    // Fallback (should not happen with host-authoritative model)
    const aiNames=[AI_NAMES[0],AI_NAMES[1],AI_NAMES[2]];
    gamePlayers=[];
    for(let i=0;i<4;i++){
      if(i<MP.players.length){
        gamePlayers.push({id:i,name:MP.players[i].nick,score:0,hand:[],isAI:false,mpId:MP.players[i].id});
      } else {
        gamePlayers.push({id:i,name:aiNames[i-MP.players.length],score:0,hand:[],isAI:true});
      }
    }
    starter=0;
  }

  MP.active = true;
  // MODIFIED: Reset input queue and sequence tracking on new game (prevents stale state)
  MP.inputQueue = [];
  MP.seqIn = {};

  // Which slot am I?
  MP.mySlot = MP.players.findIndex(p=>p.id===MP.myId);

  G = {
    gameType: '51',
    totalRounds:totalRounds, round:1, difficulty:'medium',
    players: gamePlayers,
    cur: starter,
    total:0, lastCard:null, clockwise:false,
    choosing:null, busy:false, aiActive:false, selectedCard:null,
    mp:true
  };

  goTo('game');
  
  // Show 51 game UI, hide Chkobba UI
  const gameContent = document.getElementById('gameContent');
  if(gameContent) gameContent.style.display = '';
  const chkobbaUI = document.getElementById('chkobbaUI');
  if(chkobbaUI) chkobbaUI.style.display = 'none';
  
  showCountdown(()=>{
    showRoundBanner(1, G.totalRounds, ()=>{
      renderGame();
      setMsg(G.players[starter].name+"'S TURN!");
      if(MP.isHost){
        if(G.players[starter].isAI) scheduleAI();
        mpStartTimer();
        mpStartHostTick();
        mpStartHeartbeat();
      }
      setChatBtnVisible(true);
      clearChat();
    });
  });
}

function mpBeginChkobba(gamePlayers, table, deck, starter, targetScore){
  MP.active = true;
  MP.inputQueue = [];
  MP.seqIn = {};
  
  // Which slot am I?
  MP.mySlot = MP.players.findIndex(p=>p.id===MP.myId);
  
  G = {
    gameType: 'chkobba',
    mode: '1v1',
    targetScore: targetScore,
    round: 1,
    difficulty: 'medium',
    players: gamePlayers,
    table: table,
    deck: deck,
    cur: starter,
    lastCapture: null,
    busy: false,
    aiActive: false,
    selectedCard: null,
    highlightedCapture: null,
    mp: true
  };
  
  goTo('game');
  
  // Hide 51 UI, show Chkobba UI
  const gameContent = document.getElementById('gameContent');
  if(gameContent) gameContent.style.display = 'none';
  const chkobbaUI = document.getElementById('chkobbaUI');
  if(chkobbaUI) chkobbaUI.style.display = '';
  
  showCountdown(()=>{
    showRoundBanner(1, 99, ()=>{
      createChkobbaUI();
      renderChkobbaGame();
      if(MP.isHost){
        if(G.players[starter].isAI) scheduleChkobbaAI();
        mpStartTimer();
        mpStartHostTick();
        mpStartHeartbeat();
      }
      setChatBtnVisible(true);
      clearChat();
    });
  });
}

// ── COUNTDOWN before MP game starts ──────────────────────────
function showCountdown(onDone){
  const overlay = document.createElement('div');
  overlay.id = 'mpCountdownOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:8000;background:rgba(0,0,0,0.82);display:flex;align-items:center;justify-content:center;pointer-events:none;';
  const num = document.createElement('div');
  num.style.cssText = 'font-family:\'Press Start 2P\',monospace;font-size:clamp(80px,15vw,140px);color:#FFD700;text-shadow:6px 6px 0 #8B6914,0 0 40px rgba(255,215,0,0.6);animation:countPop 0.35s steps(4);';
  overlay.appendChild(num);
  document.body.appendChild(overlay);

  let count = 3;
  const tick = ()=>{
    num.textContent = count;
    // restart animation
    num.style.animation='none';
    requestAnimationFrame(()=>requestAnimationFrame(()=>{ num.style.animation='countPop 0.35s steps(4)'; }));
    sfxClick();
    count--;
    if(count > 0) setTimeout(tick, 1000);
    else setTimeout(()=>{ overlay.remove(); onDone(); }, 1000);
  };
  tick();
}

// ── ADDED: Host tick loop ──────────────────────────────────────
// The host drains the inputQueue every ~100ms, applies validated moves,
// and broadcasts authoritative snapshots. This prevents:
// - Direct G mutation inside network event handlers
// - Race conditions from concurrent message processing
// - Desync from independent simulation on both sides
const MP_TICK_RATE_MS = 100; // 10 ticks/sec is sufficient for a card game

function mpStartHostTick(){
  if(!MP.isHost) return;
  if(MP.tickInterval) clearInterval(MP.tickInterval); // guard against double-start
  MP.tickInterval = setInterval(mpHostTick, MP_TICK_RATE_MS);
}

function mpStopHostTick(){
  if(MP.tickInterval){ clearInterval(MP.tickInterval); MP.tickInterval = null; }
}

function mpHostTick(){
  if(!MP.active || !MP.isHost) return;

  let stateChanged = false;

  // Drain the input queue
  while(MP.inputQueue.length > 0){
    const inp = MP.inputQueue.shift();

    if(G.busy){ continue; }

    // ── RAMI inputs ──
    if(G.gameType === 'rami'){
      const rami = G.rami;
      if(!rami) continue;
      // Validate it's this player's turn
      if(inp.slot !== rami.currentTurn) continue;
      const p = G.players[inp.slot];

      switch(inp.action){
        case 'draw':
          if(rami.playerPhase !== 'draw'){ continue; } // already drew, ignore extra
          ramiApplyDraw(inp.slot); break;
        case 'draw_discard':
          if(rami.playerPhase !== 'draw'){ continue; } // already drew, ignore extra
          ramiApplyDrawDiscard(inp.slot); break;
        case 'discard':{
          const card = p.hand.find(c=>c.r===inp.card.r&&c.s===inp.card.s);
          if(!card) continue;
          ramiApplyDiscard(inp.slot, card);
          break;
        }
        case 'open':{
          // Apply melds directly (host-authority, no re-routing)
          const melds = inp.melds;
          if(!melds||!melds.length) continue;
          const total = calculateMeldScore(melds);
          if(!rami.hasOpened[inp.slot]){
            let highest=G.ramiOpeningMin||51;
            G.players.forEach((_,idx)=>{if(rami.hasOpened[idx]&&rami.openingScores[idx]>0)highest=Math.max(highest,rami.openingScores[idx]);});
            if(total<=highest) continue; // invalid open, skip
            rami.hasOpened[inp.slot]=true;
            rami.openingScores[inp.slot]=total;
          }
          melds.forEach(slot=>{
            rami.tableMelds.push({owner:inp.slot,cards:ramiSortMeld([...slot])});
            if(!p.laidMelds)p.laidMelds=[];
            p.laidMelds.push([...slot]);
            slot.map(c=>c.r+c.s).forEach(k=>{const i=p.hand.findIndex(c=>c.r+c.s===k);if(i>=0)p.hand.splice(i,1);});
          });
          sfxCoin();
          if(p.hand.length===0){ramiEndRound(inp.slot);break;}
          rami.playerPhase='play';
          ramiSetMsg(p.name+' OPENED! MELDS LAID');
          renderRamiGame();
          break;
        }
        case 'place':{
          const card = p.hand.find(c=>c.r===inp.card.r&&c.s===inp.card.s);
          if(!card) continue;
          rami.tableSelCard = card;
          const result = placeCardOnTableMeld(card, inp.meldIndex);
          if(!result){ rami.tableSelCard=null; continue; }
          const ci = p.hand.findIndex(c=>c.r===card.r&&c.s===card.s);
          if(ci>=0) p.hand.splice(ci,1);
          if(result.jokerTaken){ p.hand.push({s:'★',r:'JK'}); sfxCoin(); }
          else sfxCard();
          rami.tableSelCard=null;
          if(p.hand.length===0){ ramiEndRound(inp.slot); break; }
          ramiSetMsg(p.name+' PLACED ON TABLE — PLACE MORE OR DISCARD');
          renderRamiGame();
          break;
        }
      }
      if(!p.isAI) mpResetIdleTurn(inp.slot);
      stateChanged = true;
      MP.snapshotDirty = true;
      continue;
    }

    // ── CHKOBBA / 51 inputs (existing logic) ──
    if(inp.slot !== G.cur){ continue; }
    if(G.gameType !== 'chkobba' && G.choosing){ continue; }

    const p = G.players[G.cur];
    const found = p.hand.find(c=>c.r===inp.card.r && c.s===inp.card.s);
    if(!found){ continue; }

    if(G.gameType === 'chkobba'){
      playChkobbaCard(found, inp.captureIndices || null);
    } else {
      const choice = inp.choice !== null ? Number(inp.choice) : null;
      playCard(found, choice);
    }
    
    if(!G.players[inp.slot].isAI) mpResetIdleTurn(inp.slot);
    stateChanged = true;
  }

  if(MP.snapshotDirty){
    stateChanged = true;
    MP.snapshotDirty = false;
  }

  if(stateChanged){
    mpSendSnapshot();
  }
}

// ADDED: Serialize and broadcast current G state to all clients
function mpSendSnapshot(extra={}){
  if(!MP.isHost || !MP.active) return;
  const snap = JSON.parse(JSON.stringify(G));
  const lastMove = G._lastMove ? JSON.stringify(G._lastMove) : null;
  mpSend('snapshot', {
    state: JSON.stringify(snap),
    statusMsg: document.getElementById('msgStrip') ? document.getElementById('msgStrip').textContent : '',
    timerSlot: G.gameType === 'rami' ? (G.rami ? G.rami.currentTurn : 0) : G.cur,
    lastMove: lastMove,
    ...extra
  });
  delete G._showEl7aya;
  delete G._showChkobba;
  delete G._lastMove;
}

// ── Turn timer (MP only) ──
let _timerIv=null;

function mpStartTimer(){
  if(_timerIv){ clearInterval(_timerIv); _timerIv=null; }
  if(!G.mp) return;
  // Rami needs more thinking time — 60s. Other games stay at 15s.
  const maxSec = (G.gameType === 'rami') ? 60 : 15;
  let sec = maxSec;
  const bar=document.getElementById('timerBar');
  const fill=document.getElementById('timerFill');
  
  // For Rami use rami.currentTurn, for other games use G.cur
  const currentTurnSlot = (G.gameType==='rami' && G.rami) ? G.rami.currentTurn : G.cur;
  const mySlot = MP.mySlot;
  const isMyTurn = (currentTurnSlot === mySlot);
  
  if(isMyTurn){
    bar.style.top = 'auto';
    bar.style.bottom = '0';
  } else {
    bar.style.top = '0';
    bar.style.bottom = 'auto';
  }
  
  bar.style.display='block';
  fill.style.width='100%';
  fill.style.background='#FFD700';
  fill.classList.remove('timer-danger');

  // Snapshot the active slot now — used by timeout handler
  const timerSlot = currentTurnSlot;

  _timerIv=setInterval(()=>{
    sec--;
    fill.style.width=((sec/maxSec)*100)+'%';
    // Turn red in the last 10s
    if(sec<=10){ fill.style.background='#CC0000'; fill.classList.add('timer-danger'); }
    if(sec<=0){
      clearInterval(_timerIv); _timerIv=null;
      showTimerEndedAnimation();
      setTimeout(()=>{ bar.style.display='none'; }, 1500);

      // ── RAMI timeout ──
      if(G.gameType === 'rami' && G.rami){
        const rami = G.rami;
        if(MP.isHost && rami.currentTurn === timerSlot && !G.busy){
          const p = G.players[timerSlot];
          if(p && p.hand.length > 0){
            mpRecordIdleTurn(timerSlot);
            if(rami.playerPhase === 'draw'){
              // Auto-draw from pile
              MP.inputQueue.push({slot:timerSlot, action:'draw'});
            } else {
              // Auto-discard a random legal card
              const legal = p.hand.filter(c=>ramiCanDiscard(c, p.hand, rami.tableMelds));
              const card = legal.length > 0 ? legal[Math.floor(Math.random()*legal.length)] : p.hand[Math.floor(Math.random()*p.hand.length)];
              MP.inputQueue.push({slot:timerSlot, action:'discard', card:{r:card.r,s:card.s}});
            }
          }
        }
        if(!MP.isHost && rami.currentTurn === MP.mySlot && !G.busy){
          const p = G.players[MP.mySlot];
          if(p && p.hand.length > 0){
            if(rami.playerPhase === 'draw'){
              mpSend('rami_input',{slot:MP.mySlot, action:'draw'});
            } else {
              const legal = p.hand.filter(c=>ramiCanDiscard(c, p.hand, rami.tableMelds));
              const card = legal.length > 0 ? legal[Math.floor(Math.random()*legal.length)] : p.hand[Math.floor(Math.random()*p.hand.length)];
              mpSend('rami_input',{slot:MP.mySlot, action:'discard', card:{r:card.r,s:card.s}});
            }
          }
        }
        return;
      }

      // ── 51 / Chkobba timeout (original logic) ──
      if(MP.isHost && G.cur===timerSlot && !G.busy && !G.choosing){
        const hand=G.players[G.cur].hand;
        if(hand.length>0){
          const card=hand[Math.floor(Math.random()*hand.length)];
          let choice=null;
          if(card.r==='A') choice = (G.total+11>=51)?1:11;
          if(card.r==='10') choice = (G.total>=30)?-10:10;
          mpRecordIdleTurn(G.cur);
          MP.inputQueue.push({slot:G.cur, card:card, choice:choice, tick:MP.seqOut});
        }
      }
      if(!MP.isHost && G.cur===MP.mySlot && !G.busy && !G.choosing){
        const hand=G.players[G.cur].hand;
        if(hand.length>0){
          const card=hand[Math.floor(Math.random()*hand.length)];
          let choice=null;
          if(card.r==='A') choice = (G.total+11>=51)?1:11;
          if(card.r==='10') choice = (G.total>=30)?-10:10;
          mpSend('input',{slot:MP.mySlot, card:JSON.stringify(card), choice:choice, tick:MP.seqOut});
        }
      }
    }
  },1000);
}



// ── REAL-TIME CHAT ──────────────────────────────────────────
let _chatMessages = []; // local history, cleared on game end

function openChat(){
  sfxClick();
  // Clear unread indicator
  document.getElementById('chatUnread').style.display = 'none';
  // Render all messages
  renderChatMessages();
  document.getElementById('chatOverlay').classList.add('show');
  setTimeout(()=>document.getElementById('chatInput').focus(), 100);
}

function closeChat(){
  sfxClick();
  document.getElementById('chatOverlay').classList.remove('show');
}

function sendChat(){
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text) return;
  if(!MP.active) return;
  input.value = '';
  const nick = MP.myNick || 'YOU';
  // Send to all players via existing WebSocket
  mpSend('chat', {nick: nick, text: text, id: MP.myId});
  // Show locally immediately
  addChatMessage(nick, text, true);
  // Show toast for own message
  showChatToast(nick, text, true);
}

function addChatMessage(nick, text, isMe){
  const now = new Date();
  const time = now.getHours().toString().padStart(2,'0')+':'+now.getMinutes().toString().padStart(2,'0');
  _chatMessages.push({nick, text, isMe, time});
  // If chat is open re-render
  if(document.getElementById('chatOverlay').classList.contains('show')){
    renderChatMessages();
  } else {
    // Show unread dot
    document.getElementById('chatUnread').style.display = 'block';
  }
}

function renderChatMessages(){
  const container = document.getElementById('chatMessages');
  container.innerHTML = '';
  _chatMessages.forEach(m=>{
    const div = document.createElement('div');
    div.className = 'chat-msg';
    div.innerHTML =
      '<span class="chat-msg-name'+(m.isMe?' me':'')+'">'+m.nick+'</span>'+
      '<span class="chat-msg-text">'+escapeHtml(m.text)+'</span>'+
      '<span class="chat-msg-time">'+m.time+'</span>';
    container.appendChild(div);
  });
  // Scroll to bottom
  container.scrollTop = container.scrollHeight;
}

function showChatToast(nick, text, isMe){
  const toasts = document.getElementById('chatToasts');
  const div = document.createElement('div');
  div.className = 'chat-toast';
  div.innerHTML = '<span style="color:'+(isMe?'#44FF88':'#FFD700')+';">'+nick+'</span> '+escapeHtml(text);
  toasts.appendChild(div);
  // Remove after 5 seconds
  setTimeout(()=>{ if(div.parentNode) div.parentNode.removeChild(div); }, 5000);
}

function escapeHtml(str){
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function clearChat(){
  _chatMessages = [];
  const container = document.getElementById('chatMessages');
  if(container) container.innerHTML = '';
  const toasts = document.getElementById('chatToasts');
  if(toasts) toasts.innerHTML = '';
  document.getElementById('chatUnread').style.display = 'none';
}

// Show/hide chat button based on MP state
function setChatBtnVisible(visible){
  document.getElementById('chatBtn').style.display = visible ? 'flex' : 'none';
}
function showDisconnectOverlay(nick){
  sfxLose();
  const ov = document.getElementById('ovDisconnect');
  const msg = document.getElementById('ovDisconnectMsg');
  const sub = document.getElementById('ovDisconnectSub');
  const t = LANG[currentLang];
  msg.textContent = '⚠ ' + nick + '\nDISCONNECTED!';
  sub.textContent = 'RETURNING TO MENU...';
  ov.style.display = 'flex';
  setTimeout(()=>{
    ov.style.display = 'none';
    mpLeave();
  }, 3000);
}

// ── Disconnect & Idle Detection ──
// beforeunload: best-effort graceful leave when tab closes
window.addEventListener('beforeunload', ()=>{
  if(MP.active && MP.ws && MP.ws.readyState === 1){
    if(MP.isHost){
      mpSend('host_left', { nick: MP.myNick });
    } else {
      mpSend('player_left', { nick: MP.myNick, id: MP.myId });
    }
  }
});

// Heartbeat state
let _pingInterval = null;
const PING_INTERVAL_MS = 5000;   // ping every 5s
const DEAD_THRESHOLD_MS = 12000; // no pong for 12s = dead

// Per-slot tracking on host
// MP.lastPong[slot] = timestamp of last pong received
// MP.idleTurns[slot] = consecutive turns auto-thrown by timer

function mpStartHeartbeat(){
  if(_pingInterval) clearInterval(_pingInterval);
  if(!MP.isHost) return;
  MP.lastPong = {};
  MP.idleTurns = {};
  // Init timestamps for all real human slots
  G.players.forEach((p,i)=>{ if(!p.isAI){ MP.lastPong[i] = Date.now(); MP.idleTurns[i] = 0; } });

  _pingInterval = setInterval(()=>{
    if(!MP.active || !MP.isHost){ clearInterval(_pingInterval); return; }
    mpSend('ping', {t: Date.now()});
    // Check for dead players
    const now = Date.now();
    G.players.forEach((p,slot)=>{
      if(p.isAI || slot === MP.mySlot) return; // skip AI and self
      const last = MP.lastPong[slot] || now;
      if(now - last > DEAD_THRESHOLD_MS){
        clearInterval(_pingInterval);
        showDisconnectOverlay(p.name);
      }
    });
  }, PING_INTERVAL_MS);
}

function mpStopHeartbeat(){
  if(_pingInterval){ clearInterval(_pingInterval); _pingInterval = null; }
}

// Called by host timer when it auto-throws for a human slot
function mpRecordIdleTurn(slot){
  if(!MP.isHost) return;
  if(!MP.idleTurns) MP.idleTurns = {};
  const p = G.players[slot];
  if(!p || p.isAI || slot === MP.mySlot) return;
  MP.idleTurns[slot] = (MP.idleTurns[slot] || 0) + 1;
  if(MP.idleTurns[slot] >= 2){
    mpStopHeartbeat();
    showDisconnectOverlay(p.name + ' (AFK)');
  }
}

// Called by host when a real human actually plays a card — reset their idle counter
function mpResetIdleTurn(slot){
  if(!MP.isHost || !MP.idleTurns) return;
  MP.idleTurns[slot] = 0;
}

// ── Rematch (MP only) ──
// ── Vote-based Rematch ──
// Everyone sees the button. Each real player votes. When all have voted → host starts.
function mpVoteRematch(){
  sfxClick();
  const btn = document.getElementById('btnRematch');
  const t = LANG[currentLang];
  if(btn) btn.disabled = true;

  // Count total real human players
  const totalHumans = G.players.filter(p=>!p.isAI).length;

  if(MP.isHost){
    // Host records own vote
    if(!MP.rematchVotes) MP.rematchVotes = new Set();
    MP.rematchVotes.add(MP.myId);
    const count = MP.rematchVotes.size;
    // Broadcast vote update to all clients
    mpSend('rematch_vote_update', {count, total: totalHumans});
    updateRematchStatus(count, totalHumans);
    if(count >= totalHumans) mpDoRematch();
  } else {
    // Client sends vote to host
    mpSend('rematch_vote', {playerId: MP.myId});
    updateRematchStatus(null, totalHumans); // show "voted, waiting..."
  }
}

function updateRematchStatus(count, total){
  const t = LANG[currentLang];
  const statusEl = document.getElementById('rematchStatus');
  const btn = document.getElementById('btnRematch');
  if(count === null){
    // My vote sent, waiting for others
    if(btn){ btn.textContent = '✓ '+t.voted; }
    if(statusEl){ statusEl.style.display=''; statusEl.textContent = t.waitingVotes+'...'; }
  } else {
    if(btn){ btn.textContent = '↺ '+t.rematch+' ('+count+'/'+total+')'; }
    if(statusEl){ statusEl.style.display=''; statusEl.textContent = count+'/'+total+' '+t.voted; }
  }
}

function mpDoRematch(){
  sfxCoin();
  const totalRounds = G.totalRounds;
  const gamePlayers = G.players.map(p=>({...p, score:0, hand:[]}));
  const deck = shuffle(createDeck());
  let idx=0;
  gamePlayers.forEach(p=>{p.hand=[];for(let i=0;i<8;i++)p.hand.push(deck[idx++]);});
  let starter=0;
  gamePlayers.forEach((p,i)=>{if(p.hand.some(c=>c.r==='7'&&c.s==='♥'))starter=i;});
  MP.rematchVotes = new Set();
  mpSend('rematch',{ gamePlayers:JSON.stringify(gamePlayers), starter, totalRounds });
  mpBeginGame(gamePlayers, starter, totalRounds);
}

// ── Leave / cleanup ──
// MODIFIED: Stops host tick loop, notifies peers of disconnect, resets all MP state
function mpConfirmLeave(){
  sfxClick();
  const modal = document.getElementById('leaveRoomConfirm');
  if(modal) modal.style.display = 'flex';
}

async function mpLeave(){
  // Close confirmation modal if open
  const modal = document.getElementById('leaveRoomConfirm');
  if(modal) modal.style.display = 'none';
  // Broadcast departure BEFORE closing the socket
  if(MP.ws && MP.ws.readyState === 1){
    if(MP.isHost){
      // Host leaving — tell everyone to leave too (lobby or in-game)
      mpSend('host_left', { nick: MP.myNick });
    } else {
      mpSend('player_left', { nick: MP.myNick, id: MP.myId });
    }
    // Small delay so broadcast fires before socket closes
    await new Promise(r => setTimeout(r, 150));
  }

  MP.active = false;
  if(_timerIv){ clearInterval(_timerIv); _timerIv = null; }
  document.getElementById('timerBar').style.display = 'none';

  mpStopHostTick();
  mpStopHeartbeat();
  setChatBtnVisible(false);
  clearChat();
  closeChat();

  if(MP.ws){ MP.ws.close(); MP.ws = null; }

  // Host cleans up the room row
  if(MP.isHost && MP.roomCode){
    await supaFetch('DELETE', 'mp_rooms?code=eq.' + MP.roomCode);
  }

  // Full state reset
  MP.roomCode = null; MP.isHost = false; MP.active = false;
  MP.seqOut = 0; MP.seqIn = {}; MP.inputQueue = []; MP.gameStarted = false;
  MP.tickInterval = null; MP.snapshotDirty = false; MP.selectedRounds = 7;
  MP.selectedRamiTarget = 101;
  MP._lastTimerSlot = -1; MP._lastTimerPhase = '';

  goTo('menu');
}

// Prevent scroll
document.addEventListener('touchmove',e=>e.preventDefault(),{passive:false});

// ============================================================
// ============================================================
// *** RAMI GAME — v5 ***
// Layout: AI melds top-center, player melds bottom-center (each in front of owner)
// Melds always sorted. Draw pile stacked IRL look. Transparent label backgrounds.
// TAHBAT = select cards → confirm. Discard = tap card → confirm button only.
// Round pill shows highestScore/targetScore. Rami setup: custom pixel keyboard for target.

// ─── Card helpers ─────────────────────────────────────────────
// Ace value depends on context: 1 in low sequence (A-2-3), 10 in set or high sequence
// Compute a card's point value in the context of its meld.
// Joker takes the value of the rank it fills (positional value).
// Ace = 1 in A-2-3, 10 otherwise.
function ramiCardValue(c,meld){
  if(c.r!=='JK'&&c.r!=='A')return ['J','Q','K'].includes(c.r)?10:parseInt(c.r);
  if(c.r==='A'){
    if(meld&&meld.length){
      const nj=meld.filter(x=>x.r!=='JK'),ranks=nj.map(x=>x.r);
      if(ranks.includes('2')&&ranks.includes('3'))return 1;
      if(ranks.includes('K')||ranks.includes('Q'))return 10;
      if(ranks.every(r=>r==='A'))return 10;
      return 10;
    }
    return 10;
  }
  // Joker: find what rank it substitutes in the meld
  if(!meld||!meld.length)return 0;
  const nj=meld.filter(x=>x.r!=='JK');
  if(!nj.length)return 0;
  // Set (all same rank): joker = that rank's value
  if(new Set(nj.map(x=>x.r)).size===1){
    const fakeCard={r:nj[0].r,s:'♣'};return ramiCardValue(fakeCard,meld);
  }
  // Sequence: find the gap the joker fills
  const sorted=[...nj].sort((a,b)=>ramiRankIdx(a.r)-ramiRankIdx(b.r));
  const jkInMeld=meld.filter(x=>x.r==='JK');
  let gapRanks=[];
  for(let i=1;i<sorted.length;i++){
    const gap=ramiRankIdx(sorted[i].r)-ramiRankIdx(sorted[i-1].r)-1;
    for(let g=1;g<=gap;g++){
      const ri=ramiRankIdx(sorted[i-1].r)+g;
      gapRanks.push(RAMI_RANK_ORDER[ri]);
    }
  }
  // Also handle joker at start (A-2-3 where A might be gap) or end
  if(gapRanks.length<jkInMeld.length){
    // Try prepend: rank before sorted[0]
    const before=ramiRankIdx(sorted[0].r)-1;
    if(before>=0)gapRanks.unshift(RAMI_RANK_ORDER[before]);
    // Try append: rank after sorted[last]
    const after=ramiRankIdx(sorted[sorted.length-1].r)+1;
    if(after<RAMI_RANK_ORDER.length-1)gapRanks.push(RAMI_RANK_ORDER[after]);
  }
  // This specific joker gets the first unfilled gap rank
  const myJkIndex=meld.filter((x,i)=>x.r==='JK'&&meld.indexOf(x)===i).indexOf(c);
  const rank=gapRanks[myJkIndex]||gapRanks[0];
  if(!rank)return 0;
  if(['J','Q','K'].includes(rank))return 10;
  if(rank==='A')return 1; // joker filling A-start of sequence counts as 1
  return parseInt(rank)||0;
}
function createRamiDeck(){const S=['♥','♦','♣','♠'],R=['A','2','3','4','5','6','7','8','9','10','J','Q','K'],d=[];for(let i=0;i<2;i++){S.forEach(s=>R.forEach(r=>d.push({s,r})));d.push({s:'★',r:'JK'});d.push({s:'★',r:'JK'});}return d;}
const RAMI_RANK_ORDER=['A','2','3','4','5','6','7','8','9','10','J','Q','K','JK'];
const RAMI_SUIT_ORDER=['♥','♦','♣','♠','★'];
function ramiRankIdx(r){return RAMI_RANK_ORDER.indexOf(r);}
function ramiSortHand(h){return [...h].sort((a,b)=>{if(a.r==='JK'&&b.r==='JK')return 0;if(a.r==='JK')return 1;if(b.r==='JK')return -1;const sa=RAMI_SUIT_ORDER.indexOf(a.s),sb=RAMI_SUIT_ORDER.indexOf(b.s);return sa!==sb?sa-sb:ramiRankIdx(a.r)-ramiRankIdx(b.r);});}

// Sort a meld's cards in natural order (A→K within suit, jokers at end of run)
function ramiSortMeld(cards){
  const jk=cards.filter(c=>c.r==='JK'),nj=cards.filter(c=>c.r!=='JK');
  if(!nj.length) return cards;
  // If set (all same rank), keep as is
  if(new Set(nj.map(c=>c.r)).size===1) return [...nj,...jk];
  // Sequence: sort by rank
  const sorted=[...nj].sort((a,b)=>ramiRankIdx(a.r)-ramiRankIdx(b.r));
  // Insert jokers into gap positions
  const result=[...sorted];
  jk.forEach(j=>{
    // Find first gap
    for(let i=1;i<result.length;i++){
      if(result[i].r!=='JK'&&result[i-1].r!=='JK'){
        const gap=ramiRankIdx(result[i].r)-ramiRankIdx(result[i-1].r)-1;
        if(gap>0){result.splice(i,0,j);return;}
      }
    }
    result.push(j);
  });
  return result;
}

function dealRamiCards(){const deck=shuffle(createRamiDeck()),p=[],ai=[];for(let i=0;i<14;i++){p.push(deck.pop());ai.push(deck.pop());}return{playerHand:ramiSortHand(p),aiHand:ai,drawPile:deck,discardPile:[deck.pop()]};}

// ─── Meld validation ─────────────────────────────────────────
function isValidMeld(cards){
  if(cards.length<3)return false;
  const jk=cards.filter(c=>c.r==='JK'),nj=cards.filter(c=>c.r!=='JK');
  if(!nj.length)return false;
  // Set: same rank, different suits
  if(cards.length<=4){const rk=nj[0].r;if(nj.every(c=>c.r===rk)&&new Set(nj.map(c=>c.s)).size===nj.length)return true;}
  // Run: consecutive ranks, same suit
  const suit=nj[0].s;if(!nj.every(c=>c.s===suit))return false;
  const sv=[...nj].sort((a,b)=>ramiRankIdx(a.r)-ramiRankIdx(b.r));
  
  // Allow high-Ace sequences: K-A, Q-K-A, J-Q-K-A (Ace directly after King = rank 13)
  if(sv.some(c=>c.r==='A')&&sv.some(c=>c.r==='K')){
    const remapped=sv.map(c=>c.r==='A'?{...c,_rank:13}:{...c,_rank:ramiRankIdx(c.r)});
    remapped.sort((a,b)=>a._rank-b._rank);
    let jl2=jk.length,ok=true;
    for(let i=1;i<remapped.length;i++){
      const g=remapped[i]._rank-remapped[i-1]._rank-1;
      if(g<0){ok=false;break;}
      jl2-=g;if(jl2<0){ok=false;break;}
    }
    if(ok&&(remapped.length+jk.length)===cards.length)return true;
  }

  let jl=jk.length;for(let i=1;i<sv.length;i++){const g=ramiRankIdx(sv[i].r)-ramiRankIdx(sv[i-1].r)-1;if(g<0)return false;jl-=g;if(jl<0)return false;}
  return(sv.length+jk.length)===cards.length;
}
function checkMelds(hand){
  const melds=[],jkI=hand.map((c,i)=>c.r==='JK'?i:-1).filter(i=>i>=0);
  const bySuit={};hand.forEach((c,i)=>{if(c.r!=='JK'){if(!bySuit[c.s])bySuit[c.s]=[];bySuit[c.s].push(i);}});
  Object.values(bySuit).forEach(idxs=>{const sv=[...idxs].sort((a,b)=>ramiRankIdx(hand[a].r)-ramiRankIdx(hand[b].r));for(let s=0;s<sv.length;s++)for(let e=s+2;e<sv.length;e++){const sub=sv.slice(s,e+1).map(i=>hand[i]);for(let jc=0;jc<=Math.min(jkI.length,2);jc++){const m=[...sub,...jkI.slice(0,jc).map(i=>hand[i])];if(isValidMeld(m))melds.push(m);}}});
  const byRank={};hand.forEach((c,i)=>{if(c.r!=='JK'){if(!byRank[c.r])byRank[c.r]=[];byRank[c.r].push(i);}});
  Object.values(byRank).forEach(idxs=>{if(idxs.length>=3){const m=idxs.map(i=>hand[i]);if(isValidMeld(m))melds.push(m);}if(idxs.length>=4)for(let sk=0;sk<idxs.length;sk++){const m=idxs.filter((_,j)=>j!==sk).map(i=>hand[i]);if(m.length>=3&&isValidMeld(m))melds.push(m);}if(idxs.length>=2&&jkI.length>=1){const m=[...idxs.slice(0,2).map(i=>hand[i]),hand[jkI[0]]];if(isValidMeld(m))melds.push(m);}});
  const seen=new Set();return melds.filter(m=>{const k=m.map(c=>c.r+c.s).sort().join('|');return seen.has(k)?false:(seen.add(k),true);});
}
function calculateMeldScore(melds){return melds.reduce((tot,meld)=>tot+meld.reduce((s,c)=>s+ramiCardValue(c,meld),0),0);}
function canOpen(melds){
  if(!melds || melds.length===0)return false;
  // Check if anyone else has opened and get the highest opening score
  let highestOpening = G.ramiOpeningMin||51; // Use configured minimum
  if(G.rami && G.rami.hasOpened && G.rami.openingScores){
    G.players.forEach((pl,idx)=>{
      if(G.rami.hasOpened[idx] && G.rami.openingScores[idx]>0){
        highestOpening = Math.max(highestOpening, G.rami.openingScores[idx]);
      }
    });
  }
  const myScore = calculateMeldScore(melds);
  // Need to beat highest opening by at least 1 point
  return myScore > highestOpening;
}
function bestMeldSet(hand){const all=checkMelds(hand);if(!all.length)return[];const sv=[...all].sort((a,b)=>b.length-a.length);const used=new Set(),chosen=[];for(const m of sv){const k=m.map(c=>c.r+c.s);if(k.every(x=>!used.has(x))){chosen.push(m);k.forEach(x=>used.add(x));}}return chosen;}
function calculateRamiScore(player){if(!G.rami.hasOpened[player.id])return 100;const mc=new Set((player.laidMelds||[]).flat().map(c=>c.r+c.s));return player.hand.reduce((s,c)=>mc.has(c.r+c.s)?s:s+ramiCardValue(c),0);}

// ─── Table placement helpers ──────────────────────────────────
function canPlaceCardInMeld(card,meld){
  if(card.r==='JK')return isValidMeld([...meld,card]);
  for(let i=0;i<=meld.length;i++){if(isValidMeld([...meld.slice(0,i),card,...meld.slice(i)]))return true;}
  return false;
}
function bestInsertIndex(card,meld){
  if(card.r==='JK'){if(isValidMeld([...meld,card]))return meld.length;return -1;}
  for(let i=0;i<=meld.length;i++){if(isValidMeld([...meld.slice(0,i),card,...meld.slice(i)]))return i;}
  return -1;
}
function canReplaceJoker(card,meld){
  const jkIdx=meld.findIndex(c=>c.r==='JK');
  if(jkIdx===-1||card.r==='JK')return -1;
  const trial=[...meld];trial[jkIdx]=card;
  if(!isValidMeld(trial))return -1;
  // Extra rule for SETS (same rank): joker can only be taken if the set
  // becomes a complete 4-card set (all 4 suits present). You can't just
  // swap in one card and pocket the joker from a 3-card set.
  const nj=meld.filter(c=>c.r!=='JK');
  const isSet = nj.length>0 && new Set(nj.map(c=>c.r)).size===1;
  if(isSet){
    // After replacement, the set must have all 4 suits (i.e. be a full 4-card set)
    const resultNj=trial.filter(c=>c.r!=='JK');
    const suits=new Set(resultNj.map(c=>c.s));
    if(suits.size<4)return -1; // not all suits — joker not free to take
  }
  return jkIdx;
}
function placeCardOnTableMeld(card,meldIndex){
  const rami=G.rami,meld=rami.tableMelds[meldIndex].cards;
  const jkIdx=canReplaceJoker(card,meld);
  if(jkIdx!==-1){const nm=[...meld];nm[jkIdx]=card;rami.tableMelds[meldIndex].cards=ramiSortMeld(nm);return{jokerTaken:true};}
  const insertIdx=bestInsertIndex(card,meld);
  if(insertIdx!==-1){const nm=[...meld.slice(0,insertIdx),card,...meld.slice(insertIdx)];rami.tableMelds[meldIndex].cards=ramiSortMeld(nm);return{jokerTaken:false};}
  return null;
}
function aiPlaceOnTable(hand,tableMelds){
  let changed=true,newHand=[...hand];
  while(changed){changed=false;for(let ci=newHand.length-1;ci>=0;ci--){const card=newHand[ci];for(let mi=0;mi<tableMelds.length;mi++){const jkIdx=canReplaceJoker(card,tableMelds[mi].cards);if(jkIdx!==-1){const nm=[...tableMelds[mi].cards];nm[jkIdx]=card;tableMelds[mi].cards=ramiSortMeld(nm);newHand.splice(ci,1);newHand.push({s:'★',r:'JK'});changed=true;break;}}if(changed)break;for(let mi=0;mi<tableMelds.length;mi++){const idx=bestInsertIndex(card,tableMelds[mi].cards);if(idx!==-1){const nm=[...tableMelds[mi].cards.slice(0,idx),card,...tableMelds[mi].cards.slice(idx)];tableMelds[mi].cards=ramiSortMeld(nm);newHand.splice(ci,1);changed=true;break;}}if(changed)break;}}
  return newHand;
}

// Check if card can be placed into any existing table meld
function ramiCardFitsTableMeld(card,tableMelds){
  return tableMelds.some(m=>canPlaceCardInMeld(card,m.cards)||canReplaceJoker(card,m.cards)!==-1);
}
// Check if player has a duplicate of this card in hand (for discard legality)
function ramiHasDuplicate(card,hand){
  return hand.filter(c=>c.r===card.r&&c.s===card.s).length>=2;
}
// Returns true if card can legally be discarded (no table meld can absorb it, or player has duplicate)
function ramiCanDiscard(card,hand,tableMelds){
  if(!tableMelds||!tableMelds.length)return true;
  if(!ramiCardFitsTableMeld(card,tableMelds))return true;
  return ramiHasDuplicate(card,hand);
}
function ramiChooseDiscard(hand,tableMelds){
  const used=new Set(bestMeldSet(hand).flat().map(c=>c.r+c.s));
  // Prefer cards not in best meld set and that can't go on table (unless duplicate)
  let c=hand.filter(x=>x.r!=='JK'&&!used.has(x.r+x.s)&&ramiCanDiscard(x,hand,tableMelds||[]));
  if(!c.length)c=hand.filter(x=>x.r!=='JK'&&ramiCanDiscard(x,hand,tableMelds||[]));
  if(!c.length)c=hand.filter(x=>x.r!=='JK'); // forced: pick highest non-joker
  if(!c.length)c=[...hand];
  return c.sort((a,b)=>ramiCardValue(b)-ramiCardValue(a))[0];
}
function ramiDiscardIsUseful(card,hand){return bestMeldSet([...hand,card]).flat().length>bestMeldSet(hand).flat().length;}

// ─── AI discard animation ────────────────────────────────────
function ramiShowAiDiscard(card,aiId,cb){
  const gs=document.getElementById('game'),dp=document.getElementById('ramiDiscardPile');
  if(!gs||!dp){cb();return;}
  
  // Determine starting position based on AI player ID
  let startTop='42%',startLeft='50%'; // default center
  if(G.ramiPlayerCount===4){
    // 4-player layout: 0=YOU(bottom), 1=LAYLA(left), 2=SAMI(top), 3=KARIM(right)
    if(aiId===1){startTop='50%';startLeft='15%';} // LAYLA - left
    else if(aiId===2){startTop='20%';startLeft='50%';} // SAMI - top
    else if(aiId===3){startTop='50%';startLeft='85%';} // KARIM - right
  } else {
    // 2-player: 1=SAMI(top)
    if(aiId===1){startTop='20%';startLeft='50%';}
  }
  
  const ir=card.s==='♥'||card.s==='♦'||card.r==='JK';
  const fly=document.createElement('div');
  fly.style.cssText='position:fixed;top:'+startTop+';left:'+startLeft+';transform:translate(-50%,-50%) scale(0.4);z-index:700;opacity:0;width:62px;height:88px;background:#FFFCE8;border:3px solid #8B6914;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;font-family:\'Press Start 2P\',monospace;box-shadow:4px 4px 0 #000;transition:all 0.38s cubic-bezier(0.22,1,0.36,1);pointer-events:none;';
  fly.innerHTML='<div style="font-size:16px;font-weight:bold;color:'+(card.r==='JK'?'#FF00FF':(ir?'#CC0000':'#1a0800'))+';">'+card.r+'</div><div style="font-size:20px;color:'+(ir?'#CC0000':'#1a0800')+'">'+(card.s==='★'?'JK':card.s)+'</div>';
  gs.appendChild(fly);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{fly.style.opacity='1';fly.style.transform='translate(-50%,-50%) scale(1.1)';}));
  setTimeout(()=>{const r=dp.getBoundingClientRect();fly.style.transition='all 0.3s ease-in';fly.style.left=(r.left+r.width/2)+'px';fly.style.top=(r.top+r.height/2)+'px';fly.style.transform='translate(-50%,-50%) scale(0.6)';fly.style.opacity='0';setTimeout(()=>{fly.remove();cb();},320);},700);
}

// ─── AI turn (generalized for 2 or 4 players) ───────────────
function ramiAiTurn(){
  if(!G.rami||G.busy)return;G.busy=true;
  const rami=G.rami;
  const n=G.players.length;
  const aiId=rami.currentTurn; // guaranteed to be an AI's id
  const ai=G.players[aiId];
  // Draw — AI takes from discard if useful, otherwise from draw pile
  const top=rami.discardPile[rami.discardPile.length-1];
  let drawn,fromDiscard=false;
  if(top&&ramiDiscardIsUseful(top,ai.hand)){drawn=rami.discardPile.pop();fromDiscard=true;}
  else if(rami.drawPile.length>0){drawn=rami.drawPile.pop();}
  else{const last=rami.discardPile.pop();rami.drawPile=shuffle(rami.discardPile);rami.discardPile=last?[last]:[];if(rami.drawPile.length>0)drawn=rami.drawPile.pop();}
  if(drawn)ai.hand.push(drawn);
  // If AI took discard but can't open, give it back (no ban — just can't take it)
  if(fromDiscard&&!rami.hasOpened[aiId]){const mm2=bestMeldSet(ai.hand);if(!canOpen(mm2)){if(drawn){ai.hand=ai.hand.filter(c=>!(c.r===drawn.r&&c.s===drawn.s));rami.discardPile.push(drawn);drawn=rami.drawPile.length>0?rami.drawPile.pop():null;if(drawn)ai.hand.push(drawn);}}}
  // Play melds
  const mm=bestMeldSet(ai.hand);
  if(!rami.hasOpened[aiId]&&mm.length>0){
    const openScore=calculateMeldScore(mm);
    // Check if can beat highest opening
    let highestOpening=51;
    G.players.forEach((pl,idx)=>{
      if(rami.hasOpened[idx]&&rami.openingScores[idx]>0){
        highestOpening=Math.max(highestOpening,rami.openingScores[idx]);
      }
    });
    
    if(openScore>highestOpening){
      rami.hasOpened[aiId]=true;
      rami.openingScores[aiId]=openScore;
      mm.forEach(m=>{rami.tableMelds.push({owner:aiId,cards:ramiSortMeld([...m])});if(!ai.laidMelds)ai.laidMelds=[];ai.laidMelds.push(m);});
      const lk=new Set(mm.flat().map(c=>c.r+c.s));
      ai.hand=ai.hand.filter(c=>!lk.has(c.r+c.s));
    }
  }
  if(rami.hasOpened[aiId]&&rami.tableMelds.length>0){ai.hand=aiPlaceOnTable(ai.hand,rami.tableMelds);const nm=bestMeldSet(ai.hand);if(nm.length){nm.forEach(m=>{rami.tableMelds.push({owner:aiId,cards:ramiSortMeld([...m])});if(!ai.laidMelds)ai.laidMelds=[];ai.laidMelds.push(m);});const lk=new Set(nm.flat().map(c=>c.r+c.s));ai.hand=ai.hand.filter(c=>!lk.has(c.r+c.s));}}
  else if(rami.hasOpened[aiId]){const nm=bestMeldSet(ai.hand);if(nm.length){nm.forEach(m=>{rami.tableMelds.push({owner:aiId,cards:ramiSortMeld([...m])});if(!ai.laidMelds)ai.laidMelds=[];ai.laidMelds.push(m);});const lk=new Set(nm.flat().map(c=>c.r+c.s));ai.hand=ai.hand.filter(c=>!lk.has(c.r+c.s));}}
  // Check if hand is empty after laying melds (rare edge case)
  if(ai.hand.length===0){G.busy=false;ramiEndRound(aiId);return;}
  // Discard
  if(ai.hand.length>0){
    const disc=ramiChooseDiscard(ai.hand,rami.tableMelds);
    if(!disc){G.busy=false;_ramiNextAiOrPlayer();return;} // Safety: no valid discard found
    ai.hand=ai.hand.filter(c=>!(c.r===disc.r&&c.s===disc.s));
    renderRamiGame();
    ramiShowAiDiscard(disc,aiId,()=>{
      rami.discardPile.push(disc);
      if(ai.hand.length===0){G.busy=false;ramiEndRound(aiId);return;}
      _ramiNextAiOrPlayer();G.busy=false;
    });return;
  }
  G.busy=false;if(ai.hand.length===0){ramiEndRound(aiId);return;}
  _ramiNextAiOrPlayer();
}

// Advance turn to next player (wraps around, skips to AI turn if needed)
function _ramiNextAiOrPlayer(){
  const rami=G.rami,n=G.players.length;
  const next=(rami.currentTurn+1)%n;
  rami.currentTurn=next;
  rami.playerPhase='draw';
  rami.selectedHandCard=null;rami.tableSelCard=null;
  renderRamiGame();
  if(G.mp){
    // MP: no local AI — just update message and mark dirty for snapshot
    const mySlot = MP.mySlot;
    if(next===mySlot){ramiSetMsg('YOUR TURN — DRAW A CARD');}
    else{ramiSetMsg(G.players[next].name+'\'S TURN...');}
    if(MP.isHost){MP.snapshotDirty=true;mpStartTimer();}
    return;
  }
  // Single-player: run AI if it's their turn
  if(next===0){ramiSetMsg('YOUR TURN — DRAW A CARD');}
  else{ramiSetMsg(G.players[next].name+' IS THINKING...');setTimeout(ramiAiTurn,2000);}
}

// ─── Init ─────────────────────────────────────────────────────
function initRamiGame(rounds,difficulty='medium',playerCount=2,teamMode=false){
  const target=window.ramiTargetScore||101;
  // In 2v2: slots 0&2 = Team A (you + opposite AI), slots 1&3 = Team B
  // team property: 'A' or 'B' or null (individual)
  const useTeams = teamMode && playerCount===4;
  let players;
  if(playerCount===4){
    players=[
      {id:0,name:'YOU',      score:0,hand:[],laidMelds:[],isAI:false, team: useTeams?'A':null},
      {id:1,name:AI_NAMES[1],score:0,hand:[],laidMelds:[],isAI:true,  team: useTeams?'B':null},
      {id:2,name:AI_NAMES[0],score:0,hand:[],laidMelds:[],isAI:true,  team: useTeams?'A':null},
      {id:3,name:AI_NAMES[2],score:0,hand:[],laidMelds:[],isAI:true,  team: useTeams?'B':null},
    ];
  } else {
    players=[
      {id:0,name:'YOU',      score:0,hand:[],laidMelds:[],isAI:false, team:null},
      {id:1,name:AI_NAMES[0],score:0,hand:[],laidMelds:[],isAI:true,  team:null},
    ];
  }
  // Build hasOpened map
  const hasOpened={};players.forEach(p=>hasOpened[p.id]=false);
  // Build openingScores map
  const openingScores={};players.forEach(p=>openingScores[p.id]=0);
  // Build banRounds map (one per AI player)
  const banRounds={};players.forEach(p=>{ if(p.isAI) banRounds[p.id]=0; });
  // Deal cards (108-card double deck)
  const deck=shuffle(createRamiDeck());
  players.forEach(p=>{ p.hand=[]; for(let i=0;i<14;i++) p.hand.push(deck.pop()); });
  if(playerCount===2) players[0].hand=ramiSortHand(players[0].hand);
  else players[0].hand=ramiSortHand(players[0].hand);
  const drawPile=deck;
  const discardPile=[drawPile.pop()];
  G={gameType:'rami',totalRounds:rounds,round:0,difficulty,ramiTarget:target,ramiOpeningMin:window.ramiOpeningMin||51,ramiPlayerCount:playerCount,ramiTeamMode:useTeams,
    players,
    rami:{drawPile,discardPile,tableMelds:[],hasOpened,banRounds,openingScores,
      currentTurn:0,playerPhase:'draw',selectedHandCard:null,tableSelCard:null,
      tahbatOpen:false,tahbatSlots:[[]],tahbatActive:0},
    busy:false};
  goTo('game');
  const gc=document.getElementById('gameContent'),cu=document.getElementById('chkobbaUI');
  if(gc)gc.style.display='none';if(cu)cu.style.display='none';
  setChatBtnVisible(false); // MSG only for online
  setTimeout(()=>{
    if(playerCount===4) create4PRamiUI(); else createRamiUI();
    G.round=1; ramiUpdateRoundPill(); renderRamiGame();
    const openEl=document.createElement('div');
    openEl.style.cssText='position:fixed;inset:0;z-index:8000;background:rgba(0,0,0,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(10px,2vh,18px);pointer-events:none;';
    openEl.innerHTML='<div style="font-family:\'Press Start 2P\',monospace;font-size:clamp(8px,1.1vw,12px);color:#C9A84C;letter-spacing:3px;">OPENING MINIMUM</div>'
      +'<div style="font-family:\'Press Start 2P\',monospace;font-size:clamp(56px,9vw,96px);color:#FFD700;text-shadow:4px 4px 0 #8B6914;">'+(G.ramiOpeningMin||51)+'</div>'
      +'<div style="font-family:\'Press Start 2P\',monospace;font-size:clamp(8px,1vw,11px);color:#888;letter-spacing:2px;">PTS TO OPEN</div>'
      +'<div style="font-family:\'Press Start 2P\',monospace;font-size:clamp(7px,0.85vw,9px);color:#555;margin-top:4px;">TARGET: '+(G.ramiTarget||101)+' PTS</div>';
    document.body.appendChild(openEl);
    setTimeout(()=>{ openEl.remove(); showRoundBanner(1,99,()=>{ ramiSetMsg('YOUR TURN — DRAW A CARD'); }); },2000);
  },150);
}

function ramiUpdateRoundPill(){
  const el=document.getElementById('hdrRound');if(!el)return;
  const lbl=document.getElementById('hdrRoundLabel');
  const omp=document.getElementById('openMinPill');
  // Score pill
  if(G.ramiTeamMode){
    const scoreA=G.players.filter(p=>p.team==='A').reduce((s,p)=>s+p.score,0);
    const scoreB=G.players.filter(p=>p.team==='B').reduce((s,p)=>s+p.score,0);
    el.textContent=Math.max(scoreA,scoreB)+'/'+(G.ramiTarget||101);
  } else {
    const maxScore=G.players.reduce((m,p)=>Math.max(m,p.score),0);
    el.textContent=maxScore+'/'+(G.ramiTarget||101);
  }
  if(lbl)lbl.textContent='SCORE';
  // Opening minimum pill — shown separately below, updates live
  if(omp){
    const curMin=G.ramiOpeningMin||51;
    // Find highest opening so far (the actual minimum is the max of configured and highest opened)
    let highestOpened=curMin;
    if(G.rami&&G.rami.openingScores){
      G.players.forEach((_,idx)=>{
        if(G.rami.hasOpened&&G.rami.hasOpened[idx]&&G.rami.openingScores[idx]>0)
          highestOpened=Math.max(highestOpened,G.rami.openingScores[idx]);
      });
    }
    omp.style.display='';
    omp.textContent='OPEN > '+highestOpened+' PTS';
  }
}

// ─── UI ───────────────────────────────────────────────────────
// Top:    AI card backs (full width) | SAMI info | AI melds (centered)
// Middle: DRAW left | DISCARD center (with msg+btns below) 
// Bottom: Player melds (centered) | YOU info | Player hand
function createRamiUI(){
  const gs=document.getElementById('game');
  const old=document.getElementById('ramiUI');if(old)old.remove();
  const ui=document.createElement('div');ui.id='ramiUI';
  ui.style.cssText='position:absolute;inset:0;z-index:100;display:flex;flex-direction:column;padding:clamp(52px,7.5vh,68px) clamp(8px,1.5vw,20px) clamp(8px,1.5vh,16px);pointer-events:auto;overflow:hidden;gap:0;';
  ui.innerHTML=`
<!-- TOP HALF: AI area -->
<div style="display:flex;flex-direction:column;flex:1;min-height:0;gap:clamp(4px,0.8vh,8px);">
  <!-- AI card backs full width -->
  <div id="ramiAiCards" style="width:100%;display:flex;gap:clamp(2px,0.3vw,4px);flex-wrap:nowrap;justify-content:center;align-items:center;padding:clamp(2px,0.4vh,4px) clamp(8px,1.5vw,16px);overflow:hidden;flex-shrink:0;"></div>
  <!-- SAMI info -->
  <div style="display:flex;justify-content:center;flex-shrink:0;">
    <div style="display:inline-flex;align-items:center;gap:clamp(6px,1vw,10px);padding:clamp(4px,0.8vh,6px) clamp(12px,2vw,18px);background:rgba(0,0,0,0.85);border:3px solid #8B6914;box-shadow:2px 2px 0 #000;">
      <div id="ramiAiTurnDot" style="width:clamp(7px,1vw,10px);height:clamp(7px,1vw,10px);background:#FF4444;display:none;box-shadow:0 0 6px #FF4444;flex-shrink:0;border-radius:50%;"></div>
      <span style="font-family:'Press Start 2P',monospace;font-size:clamp(7px,1vw,10px);color:#C9A84C;" id="ramiAiName">${AI_NAMES[0]}</span>
      <span id="ramiAiScore" style="font-family:'Press Start 2P',monospace;font-size:clamp(8px,1.15vw,12px);color:#FFD700;font-weight:bold;">0 PTS</span>
      <span id="ramiAiStatus" style="font-family:'Press Start 2P',monospace;font-size:clamp(6px,0.8vw,9px);color:#666;">NOT OPENED</span>
    </div>
  </div>
  <!-- AI melds — centered, right under SAMI -->
  <div id="ramiAiMelds" style="display:flex;flex-wrap:wrap;gap:clamp(4px,0.7vw,10px);justify-content:center;align-items:flex-start;padding:clamp(4px,0.8vh,8px) clamp(8px,1.5vw,16px);min-height:clamp(42px,6vh,62px);flex:1;overflow:hidden;"></div>
</div>

<!-- CENTER: DRAW left | DISCARD center+msg | (right space) -->
<div style="position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:clamp(6px,1.2vh,10px) 0;margin:clamp(4px,0.8vh,8px) 0;">
  <!-- DRAW PILE — stacked horizontal IRL look -->
  <div style="position:absolute;left:clamp(8px,1.8vw,22px);top:50%;transform:translateY(-50%);display:flex;flex-direction:column;align-items:flex-start;gap:clamp(3px,0.6vh,5px);">
    <!-- Horizontal stack: 3 card backs offset left→right -->
    <div id="ramiDrawPile" onclick="G.mp?ramiMpDraw():ramiPlayerDraw()" style="position:relative;width:clamp(76px,10.5vw,116px);height:clamp(72px,10vw,94px);cursor:pointer;transition:transform 0.12s;">
      <!-- Card 3 (back, leftmost) -->
      <div class="rami-back-card" style="position:absolute;top:0;left:0;width:clamp(50px,7vw,68px);height:clamp(72px,10vw,94px);"></div>
      <!-- Card 2 (middle) -->
      <div class="rami-back-card" style="position:absolute;top:0;left:clamp(9px,1.3vw,15px);width:clamp(50px,7vw,68px);height:clamp(72px,10vw,94px);"></div>
      <!-- Card 1 (front, rightmost) — shows count -->
      <div class="rami-back-card" style="position:absolute;top:0;left:clamp(18px,2.6vw,30px);width:clamp(50px,7vw,68px);height:clamp(72px,10vw,94px);display:flex;align-items:flex-end;justify-content:center;padding-bottom:clamp(3px,0.5vh,5px);">
        <div id="ramiDrawCount" style="font-family:'Press Start 2P',monospace;color:#FFD700;font-size:clamp(7px,0.95vw,11px);text-shadow:1px 1px 0 #000;background:rgba(0,0,0,0.75);padding:clamp(2px,0.4vh,3px) clamp(4px,0.7vw,6px);box-shadow:1px 1px 0 #000;">0</div>
      </div>
    </div>
    <div style="font-family:'Press Start 2P',monospace;font-size:clamp(5px,0.65vw,7px);padding:clamp(1px,0.2vh,2px) clamp(5px,0.8vw,7px);background:rgba(0,0,0,0.75);color:#777;letter-spacing:1px;box-shadow:1px 1px 0 #000;">DRAW</div>
  </div>

  <!-- DISCARD CENTER + msg + buttons below -->
  <div style="display:flex;flex-direction:column;align-items:center;gap:clamp(4px,0.7vh,6px);">
    <div id="ramiDiscardPile" onclick="G.mp?ramiMpDrawDiscard():ramiPlayerDrawDiscard()" style="width:clamp(62px,8.5vw,84px);height:clamp(86px,11.8vw,112px);background:#1a0800;border:3px solid #8B6914;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(2px,0.4vh,3px);cursor:pointer;box-shadow:3px 3px 0 #000;transition:border-color 0.12s,transform 0.1s;">
      <div id="ramiDiscardRank" style="font-family:'Press Start 2P',monospace;font-size:clamp(17px,2.5vw,28px);font-weight:bold;color:#FFD700;"></div>
      <div id="ramiDiscardSuit" style="font-size:clamp(20px,2.9vw,34px);"></div>
    </div>
    <div style="font-family:'Press Start 2P',monospace;font-size:clamp(5px,0.6vw,7px);padding:clamp(1px,0.2vh,2px) clamp(5px,0.8vw,7px);background:rgba(0,0,0,0.75);color:#666;letter-spacing:1px;box-shadow:1px 1px 0 #000;">DISCARD</div>
    <!-- Turn msg + action buttons -->
    <div id="ramiMsg" style="font-family:'Press Start 2P',monospace;font-size:clamp(8px,1.1vw,12px);color:#FFD700;text-align:center;letter-spacing:clamp(1px,0.15vw,2px);line-height:2.2;min-width:clamp(170px,28vw,300px);padding:clamp(3px,0.5vh,5px) clamp(8px,1.4vw,12px);background:rgba(0,0,0,0.6);box-shadow:2px 2px 0 #000;"></div>
    <div id="ramiActionBtns" style="display:flex;flex-direction:column;gap:clamp(6px,1vh,8px);align-items:center;width:clamp(170px,28vw,300px);"></div>
  </div>
</div>

<!-- BOTTOM HALF: player area -->
<div style="display:flex;flex-direction:column;flex:1;min-height:0;justify-content:flex-end;gap:clamp(4px,0.8vh,8px);">
  <!-- Player melds — centered, right above YOU info -->
  <div id="ramiPlayerMelds" style="display:flex;flex-wrap:wrap;gap:clamp(4px,0.7vw,10px);justify-content:center;align-items:flex-end;padding:clamp(4px,0.8vh,8px) clamp(8px,1.5vw,16px);min-height:clamp(42px,6vh,62px);flex:1;overflow:hidden;"></div>
  <!-- YOU info -->
  <div style="display:flex;justify-content:center;flex-shrink:0;">
    <div style="display:inline-flex;align-items:center;gap:clamp(6px,1vw,10px);padding:clamp(4px,0.8vh,6px) clamp(12px,2vw,18px);background:rgba(0,0,0,0.85);border:3px solid #FFD700;box-shadow:2px 2px 0 #000;">
      <div id="ramiPlayerTurnDot" style="width:clamp(7px,1vw,10px);height:clamp(7px,1vw,10px);background:#4CAF50;display:none;box-shadow:0 0 6px #4CAF50;flex-shrink:0;border-radius:50%;"></div>
      <span style="font-family:'Press Start 2P',monospace;font-size:clamp(7px,1vw,10px);color:#FFD700;">YOU</span>
      <span id="ramiPlayerScore" style="font-family:'Press Start 2P',monospace;font-size:clamp(8px,1.15vw,12px);color:#FFD700;font-weight:bold;">0 PTS</span>
      <span id="ramiPlayerStatus" style="font-family:'Press Start 2P',monospace;font-size:clamp(6px,0.8vw,9px);color:#666;">NOT OPENED</span>
      <span id="ramiBanDisplay" style="font-family:'Press Start 2P',monospace;font-size:clamp(6px,0.8vw,9px);color:#FF4444;display:none;"></span>
    </div>
  </div>
  <!-- Player hand -->
  <div id="ramiPlayerHand" style="display:flex;gap:clamp(3px,0.6vw,7px);flex-wrap:nowrap;justify-content:center;overflow-x:auto;padding:0 clamp(6px,1.2vw,12px) clamp(6px,1vh,10px);flex-shrink:0;"></div>
</div>

<!-- TAHBAT OVERLAY -->
<div id="ramiTahbat" style="display:none;position:absolute;inset:0;z-index:300;background:rgba(0,0,0,0.93);flex-direction:column;align-items:center;justify-content:flex-start;gap:clamp(8px,1.4vh,12px);padding:clamp(16px,2.8vh,26px) clamp(14px,2.5vw,20px);overflow-y:auto;">
  <div style="font-family:'Press Start 2P',monospace;font-size:clamp(15px,2.2vw,22px);color:#FFD700;letter-spacing:3px;text-shadow:3px 3px 0 #000;flex-shrink:0;">TAHBAT</div>
  <div id="ramiTahbatHint" style="font-family:'Press Start 2P',monospace;font-size:clamp(7px,0.9vw,10px);color:#C9A84C;text-align:center;line-height:2;padding:clamp(4px,0.7vh,6px) clamp(8px,1.4vw,12px);background:rgba(0,0,0,0.65);box-shadow:2px 2px 0 #000;flex-shrink:0;">STACK YOUR MELDS — LOADING...</div>
  <div id="ramiTahbatSlots" style="display:flex;gap:clamp(7px,1.3vw,16px);flex-wrap:wrap;justify-content:center;flex-shrink:0;"></div>
  <div style="font-family:'Press Start 2P',monospace;font-size:clamp(6px,0.75vw,8px);color:#555;letter-spacing:2px;padding:clamp(2px,0.3vh,3px) clamp(6px,1vw,8px);background:rgba(0,0,0,0.55);flex-shrink:0;">── YOUR HAND ──</div>
  <div id="ramiTahbatHand" style="display:flex;gap:clamp(3px,0.6vw,7px);flex-wrap:wrap;justify-content:center;max-width:100%;padding:clamp(4px,0.8vh,6px);flex-shrink:0;"></div>
  <div style="display:flex;gap:clamp(10px,1.8vw,14px);flex-wrap:wrap;justify-content:center;margin-top:clamp(5px,0.9vh,8px);flex-shrink:0;">
    <button id="ramiTahbatConfirm" class="px-btn px-btn-green" style="font-size:clamp(8px,1.05vw,12px);display:none;" onclick="ramiTahbatConfirm()">CONFIRM MELDS</button>
    <button class="px-btn px-btn-red" style="font-size:clamp(8px,1.05vw,12px);" onclick="ramiCloseTahbat()">CANCEL</button>
  </div>
</div>

`;
  gs.appendChild(ui);
}

function ramiSetMsg(t){
  const e=document.getElementById('ramiMsg');
  if(e){e.textContent=t;}
  // Also store in G.rami so it travels inside the snapshot to guest
  if(G.rami) G.rami._msg = t;
}

// ─── Pixel numpad logic ───────────────────────────────────────
let _ramiNumpadVal='101',_ramiNumpadCb=null;
function ramiShowNumpad(currentVal,cb){
  _ramiNumpadVal=String(currentVal||'101');_ramiNumpadCb=cb;
  const el=document.getElementById('ramiNumpad');
  const dp=document.getElementById('ramiNumpadDisplay');
  if(el)el.style.display='flex';if(dp)dp.textContent=_ramiNumpadVal;
}
function ramiNumpadPress(key){
  const dp=document.getElementById('ramiNumpadDisplay');
  if(key==='clear'){_ramiNumpadVal='';} 
  else if(key==='back'){_ramiNumpadVal=_ramiNumpadVal.slice(0,-1)||'';}
  else {if(_ramiNumpadVal.length<5)_ramiNumpadVal+=key;}
  if(dp)dp.textContent=_ramiNumpadVal||'_';
}
function ramiNumpadConfirm(){
  let val=parseInt(_ramiNumpadVal)||101;
  // Rule: must be a multiple of 10 ending in 1 → round to nearest 100 then add 1
  // e.g. 100→101, 200→201, 500→501, 1000→1001
  // Snap: round val to nearest multiple of 100, then force the last digit to 1
  val = Math.max(101, val);
  // Round to nearest 100
  const rounded = Math.round(val / 100) * 100;
  const final = rounded + 1; // e.g. 100→101, 200→201, 500→501
  window.ramiTargetScore=final;
  const dp=document.getElementById('ramiNumpadDisplay');
  if(dp)dp.textContent=final;
  const btn=document.getElementById('ramiTargetBtn');
  if(btn)btn.textContent='TARGET: '+final;
  const el=document.getElementById('ramiNumpad');if(el)el.style.display='none';
  if(_ramiNumpadCb)_ramiNumpadCb(final);
  sfxCoin();
}
function ramiNumpadCancel(){
  const el=document.getElementById('ramiNumpad');if(el)el.style.display='none';
}

// ─── Small card helper ────────────────────────────────────────
function ramiSmallCard(card,highlight){
  const ir=card.s==='♥'||card.s==='♦'||card.r==='JK';
  const d=document.createElement('div');
  d.style.cssText='width:clamp(28px,4vw,42px);height:clamp(40px,5.8vw,58px);background:'+(card.r==='JK'?'#1a0a1a':'#FFFCE8')+';border:2px solid '+(highlight?'#FFD700':'#555')+';display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;font-family:\'Press Start 2P\',monospace;box-shadow:'+(highlight?'0 0 5px #FFD700,':'')+' 2px 2px 0 #000;flex-shrink:0;';
  d.innerHTML='<div style="font-size:clamp(8px,1.1vw,12px);font-weight:bold;color:'+(card.r==='JK'?'#FF00FF':(ir?'#CC0000':'#1a0800'))+';">'+card.r+'</div><div style="font-size:clamp(9px,1.3vw,14px);color:'+(ir?'#CC0000':'#1a0800')+'">'+(card.s==='★'?'JK':card.s)+'</div>';
  return d;
}

// ─── Render ───────────────────────────────────────────────────
function renderRamiGame(){
  if(!G.rami)return;
  if(G.ramiPlayerCount===4){render4PRamiGame();return;}
  const mySlot = G.mp ? MP.mySlot : 0;
  const oppSlot = 1 - mySlot;
  const rami=G.rami,p=G.players[mySlot],ai=G.players[oppSlot];
  const myTurn=rami.currentTurn===mySlot&&!G.busy;

  ramiUpdateRoundPill();

  // Update opponent name label dynamically (important for MP where it's not always "SAMI")
  const aiNameEl=document.getElementById('ramiAiName');
  if(aiNameEl) aiNameEl.textContent=ai.name;

  // Scores/status
  const ps=document.getElementById('ramiPlayerScore'),as_=document.getElementById('ramiAiScore');
  if(ps)ps.textContent=p.score+' PTS';if(as_)as_.textContent=ai.score+' PTS';
  const pst=document.getElementById('ramiPlayerStatus'),ast=document.getElementById('ramiAiStatus');
  if(pst){pst.textContent=rami.hasOpened[mySlot]?'OPENED':'NOT OPENED';pst.style.color=rami.hasOpened[mySlot]?'#4CAF50':'#666';}
  if(ast){ast.textContent=rami.hasOpened[oppSlot]?'OPENED':'NOT OPENED';ast.style.color=rami.hasOpened[oppSlot]?'#4CAF50':'#666';}
  const be=document.getElementById('ramiBanDisplay');
  if(be){const ban=rami.banRounds&&rami.banRounds[mySlot]||0;if(ban>0){be.textContent='BANNED '+ban+'T';be.style.display='';}else be.style.display='none';}
  const pd=document.getElementById('ramiPlayerTurnDot'),ad=document.getElementById('ramiAiTurnDot');
  if(pd)pd.style.display=rami.currentTurn===mySlot?'':'none';if(ad)ad.style.display=rami.currentTurn===oppSlot?'':'none';

  // Draw pile
  const dc=document.getElementById('ramiDrawCount');if(dc)dc.textContent=rami.drawPile.length;
  const de=document.getElementById('ramiDrawPile');
  if(de){const a=myTurn&&rami.playerPhase==='draw';de.style.cursor=a?'pointer':'default';de.style.borderColor=a?'#8888FF':'#4444AA';de.style.transform=a?'translateY(-3px)':'none';}

  // Discard pile
  const top=rami.discardPile[rami.discardPile.length-1];
  const dr=document.getElementById('ramiDiscardRank'),ds_=document.getElementById('ramiDiscardSuit');
  if(dr&&ds_){if(top){const ir=top.s==='♥'||top.s==='♦';dr.textContent=top.r;dr.style.color=top.r==='JK'?'#FF88FF':(ir?'#FF4444':'#FFFCE8');ds_.textContent=top.s==='★'?'JK':top.s;ds_.style.color=ir?'#FF4444':'#FFFCE8';}else{dr.textContent='';ds_.textContent='';}}
  const dpe=document.getElementById('ramiDiscardPile');
  if(dpe){const a=myTurn&&rami.playerPhase==='draw'&&!!top;dpe.style.cursor=a?'pointer':'default';dpe.style.borderColor=a?'#FFD700':'#8B6914';dpe.style.transform=a?'translateY(-3px)':'none';}

  // Opponent card backs
  const ace=document.getElementById('ramiAiCards');
  if(ace){ace.innerHTML='';ai.hand.forEach((c,ci)=>{const bc=document.createElement('div');bc.className='rami-back-card';bc.style.cssText='width:clamp(22px,3vw,38px);height:clamp(32px,4.5vw,54px);flex-shrink:0;'+(ci>0?'margin-left:-10px':'');ace.appendChild(bc);});}

  // Opponent melds (top area)
  const amel=document.getElementById('ramiAiMelds');
  if(amel){
    amel.innerHTML='';
    const canInteract=myTurn&&rami.hasOpened[mySlot]&&rami.playerPhase==='play';
    const selCard=rami.tableSelCard;
    rami.tableMelds.filter(m=>m.owner===oppSlot).forEach(meld=>{
      const mi=rami.tableMelds.indexOf(meld);
      const canPlace=canInteract&&selCard&&canPlaceCardInMeld(selCard,meld.cards);
      const hasJoker=canInteract&&selCard&&canReplaceJoker(selCard,meld.cards)!==-1;
      const isActive=canInteract&&selCard;
      const bc=hasJoker?'#FF00FF':canPlace?'#44FF88':isActive?'#FF4444':'#FF6644';
      const md=document.createElement('div');
      md.style.cssText='display:flex;gap:2px;align-items:center;padding:3px 6px;background:rgba(0,0,0,0.55);border:2px solid '+bc+';cursor:'+(canPlace||hasJoker?'pointer':'default')+';box-shadow:'+(canPlace||hasJoker?'0 0 7px '+bc:'none')+';';
      if(hasJoker){const t=document.createElement('div');t.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(5px,0.55vw,7px);color:#FF00FF;flex-shrink:0;';t.textContent='JK!';md.appendChild(t);}
      else if(canPlace){const t=document.createElement('div');t.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(5px,0.55vw,7px);color:#44FF88;flex-shrink:0;';t.textContent='+';md.appendChild(t);}
      ramiSortMeld(meld.cards).forEach(c=>md.appendChild(ramiSmallCard(c,c.r==='JK'&&hasJoker)));
      if(canPlace||hasJoker)md.addEventListener('click',()=>ramiMpPlaceOnTable(mi,selCard));
      amel.appendChild(md);
    });
  }

  // My melds (bottom area)
  const pmel=document.getElementById('ramiPlayerMelds');
  if(pmel){
    pmel.innerHTML='';
    const canInteract=myTurn&&rami.hasOpened[mySlot]&&rami.playerPhase==='play';
    const selCard=rami.tableSelCard;
    rami.tableMelds.filter(m=>m.owner===mySlot).forEach((meld)=>{
      const mi=rami.tableMelds.indexOf(meld);
      const canPlace=canInteract&&selCard&&canPlaceCardInMeld(selCard,meld.cards);
      const hasJoker=canInteract&&selCard&&canReplaceJoker(selCard,meld.cards)!==-1;
      const isActive=canInteract&&selCard;
      const bc=hasJoker?'#FF00FF':canPlace?'#44FF88':isActive?'#FF4444':'#FFD700';
      const md=document.createElement('div');
      md.style.cssText='display:flex;gap:2px;align-items:center;padding:3px 6px;background:rgba(0,0,0,0.55);border:3px solid '+bc+';cursor:'+(canPlace||hasJoker?'pointer':'default')+';box-shadow:'+(canPlace||hasJoker?'0 0 7px '+bc:'none')+';';
      if(hasJoker){const t=document.createElement('div');t.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(5px,0.55vw,7px);color:#FF00FF;flex-shrink:0;';t.textContent='JK!';md.appendChild(t);}
      else if(canPlace){const t=document.createElement('div');t.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(5px,0.55vw,7px);color:#44FF88;flex-shrink:0;';t.textContent='+';md.appendChild(t);}
      ramiSortMeld(meld.cards).forEach(c=>md.appendChild(ramiSmallCard(c,c.r==='JK'&&hasJoker)));
      if(canPlace||hasJoker)md.addEventListener('click',()=>ramiMpPlaceOnTable(mi,selCard));
      pmel.appendChild(md);
    });
    if(canInteract&&selCard){
      const noFit=!rami.tableMelds.some(m=>canPlaceCardInMeld(selCard,m.cards)||canReplaceJoker(selCard,m.cards)!==-1);
      if(noFit){const hint=document.createElement('div');hint.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(6px,0.8vw,8px);color:#FF6644;padding:3px 8px;background:rgba(0,0,0,0.7);';hint.textContent='NO MELD FITS '+selCard.r+selCard.s;pmel.appendChild(hint);}
    }
  }

  // My hand
  const he=document.getElementById('ramiPlayerHand');
  if(he){
    he.innerHTML='';
    p.hand.forEach((card,i)=>{
      const ir=card.s==='♥'||card.s==='♦'||card.r==='JK';
      const isDiscSel=rami.selectedHandCard&&rami.selectedHandCard.r===card.r&&rami.selectedHandCard.s===card.s;
      const isTableSel=rami.tableSelCard&&rami.tableSelCard.r===card.r&&rami.tableSelCard.s===card.s;
      const isSel=isDiscSel||isTableSel;
      const div=document.createElement('div');
      div.dataset.idx=i;div.draggable=true;
      div.style.cssText='width:clamp(40px,5.6vw,62px);height:clamp(56px,8vw,86px);background:'+(isSel?'#1a0a00':'#FFFCE8')+';border:3px solid '+(isTableSel?'#44FF88':isDiscSel?'#FFD700':'#555')+';display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;cursor:'+(myTurn&&rami.playerPhase!=='draw'?'pointer':'grab')+';font-family:\'Press Start 2P\',monospace;box-shadow:'+(isSel?'0 0 10px '+(isTableSel?'#44FF88':'#FFD700')+',':'')+' 2px 2px 0 #000;transform:'+(isSel?'translateY(-10px)':'none')+';transition:transform 0.1s;flex-shrink:0;';
      div.innerHTML='<div style="font-size:clamp(12px,1.7vw,18px);font-weight:bold;color:'+(card.r==='JK'?'#FF00FF':(ir?'#CC0000':'#1a0800'))+';">'+card.r+'</div><div style="font-size:clamp(13px,1.9vw,21px);color:'+(card.r==='JK'?'#FF00FF':(ir?'#CC0000':'#1a0800'))+'">'+(card.s==='★'?'JK':card.s)+'</div>';
      if(myTurn&&rami.playerPhase!=='draw')div.addEventListener('click',()=>ramiHandCardClick(card));
      div.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',i);div.style.opacity='0.4';});
      div.addEventListener('dragend',()=>{div.style.opacity='1';});
      div.addEventListener('dragover',e=>e.preventDefault());
      div.addEventListener('drop',e=>{e.preventDefault();const from=parseInt(e.dataTransfer.getData('text/plain'));const to=parseInt(div.dataset.idx);if(from===to)return;const arr=p.hand;const[mv]=arr.splice(from,1);arr.splice(to,0,mv);renderRamiGame();});
      he.appendChild(div);
    });
  }

  ramiRenderActionBtns(myTurn);
  if(rami.tahbatOpen)ramiRenderTahbatHand();
  // Apply stored message (keeps guest in sync with host's last ramiSetMsg call)
  if(rami._msg){const e=document.getElementById('ramiMsg');if(e)e.textContent=rami._msg;}
}

// ─── Hand card click ──────────────────────────────────────────
// Tapping any card selects it — DISCARD button appears immediately.
// If opened, card is also selected for table placement.
function ramiHandCardClick(card){
  const mySlot = G.mp ? MP.mySlot : 0;
  const rami=G.rami;
  if(rami.playerPhase==='draw')return;
  if(G.mp && rami.currentTurn !== mySlot) return; // block if not your turn in MP
  const same=rami.selectedHandCard&&rami.selectedHandCard.r===card.r&&rami.selectedHandCard.s===card.s;
  rami.selectedHandCard=same?null:card;
  rami.tableSelCard=rami.hasOpened[mySlot]?(same?null:card):null;
  sfxClick();renderRamiGame();
}

// ─── Place on table ───────────────────────────────────────────
function ramiPlayerPlaceOnTable(meldIndex){
  if(G.mp && !MP.isHost) return;
  const mySlot = G.mp ? MP.mySlot : 0;
  const rami=G.rami,p=G.players[mySlot];
  const card=rami.tableSelCard;if(!card)return;
  const result=placeCardOnTableMeld(card,meldIndex);if(!result)return;
  const idx=p.hand.findIndex(c=>c.r===card.r&&c.s===card.s);if(idx>=0)p.hand.splice(idx,1);
  if(result.jokerTaken){p.hand.push({s:'★',r:'JK'});sfxCoin();showToast('JOKER TAKEN!');}else sfxCard();
  rami.tableSelCard=null;
  if(G.mp && MP.isHost) MP.snapshotDirty=true;
  if(p.hand.length===0){ramiEndRound(mySlot);return;}
  ramiSetMsg('PLACED! PLACE MORE OR DISCARD');renderRamiGame();
}

// ─── TAHBAT ───────────────────────────────────────────────────
function ramiOpenTahbat(){
  const mySlot = G.mp ? MP.mySlot : 0;
  const rami=G.rami;rami.tahbatOpen=true;rami.tahbatSlots=[[]];rami.tahbatActive=0;
  const ov=document.getElementById('ramiTahbat');if(ov)ov.style.display='flex';
  const h=document.getElementById('ramiTahbatHint');
  const openMin=G.ramiOpeningMin||51;
  if(h)h.textContent=rami.hasOpened[mySlot]?'ADD CARDS TO SLOTS — LAY NEW MELDS':'NEED '+openMin+'+ PTS TOTAL TO OPEN';
  ramiRenderTahbatSlots();ramiRenderTahbatHand();
}
function ramiCloseTahbat(){G.rami.tahbatOpen=false;G.rami.tahbatSlots=[[]];G.rami.tahbatActive=0;const ov=document.getElementById('ramiTahbat');if(ov)ov.style.display='none';}

function ramiRenderTahbatSlots(){
  const sc=document.getElementById('ramiTahbatSlots');if(!sc)return;sc.innerHTML='';
  const rami=G.rami;
  // Render each existing slot
  rami.tahbatSlots.forEach((slot,si)=>{
    const active=rami.tahbatActive===si;
    const box=document.createElement('div');
    box.style.cssText='display:flex;flex-direction:column;align-items:center;gap:5px;padding:8px;min-width:clamp(85px,12vw,150px);border:3px solid '+(active?'#FFD700':'#444')+';background:'+(active?'rgba(255,215,0,0.08)':'rgba(0,0,0,0.4)')+';cursor:pointer;position:relative;';
    // Label row with X to remove slot (if >1 slot and slot is empty)
    const lblRow=document.createElement('div');lblRow.style.cssText='display:flex;align-items:center;justify-content:space-between;width:100%;gap:4px;';
    const lbl=document.createElement('div');lbl.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(6px,0.75vw,8px);color:'+(active?'#FFD700':'#666')+';';lbl.textContent='MELD '+(si+1)+(active?' ◄':'');
    lblRow.appendChild(lbl);
    // Remove slot button (only if >1 slot and this slot empty)
    if(rami.tahbatSlots.length>1&&!slot.length){
      const rem=document.createElement('div');rem.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(7px,0.8vw,9px);color:#FF4444;cursor:pointer;padding:1px 4px;background:rgba(255,0,0,0.15);';rem.textContent='✕';
      rem.addEventListener('click',e=>{e.stopPropagation();rami.tahbatSlots.splice(si,1);if(rami.tahbatActive>=rami.tahbatSlots.length)rami.tahbatActive=rami.tahbatSlots.length-1;ramiRenderTahbatSlots();ramiCheckTahbatConfirm();});
      lblRow.appendChild(rem);
    }
    box.appendChild(lblRow);
    // Cards row
    const row=document.createElement('div');row.style.cssText='display:flex;gap:3px;flex-wrap:wrap;min-height:42px;justify-content:center;align-items:center;';
    ramiSortMeld(slot).forEach((card)=>{
      const realIdx=slot.indexOf(card);
      const cd=ramiSmallCard(card,false);cd.style.cursor='pointer';cd.title='Remove';
      cd.addEventListener('click',e=>{e.stopPropagation();rami.tahbatSlots[si].splice(realIdx,1);ramiRenderTahbatSlots();ramiRenderTahbatHand();ramiCheckTahbatConfirm();});
      row.appendChild(cd);
    });
    if(!slot.length){const ph=document.createElement('div');ph.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(5px,0.65vw,7px);color:#333;';ph.textContent='EMPTY';row.appendChild(ph);}
    box.appendChild(row);
    // Validity badge
    if(slot.length>=3){const valid=isValidMeld(slot);const vi=document.createElement('div');vi.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(5px,0.65vw,7px);color:'+(valid?'#44FF88':'#FF4444')+';margin-top:2px;';vi.textContent=valid?'✓ '+calculateMeldScore([slot])+' PTS':'✗ INVALID';box.appendChild(vi);}
    box.addEventListener('click',()=>{rami.tahbatActive=si;ramiRenderTahbatSlots();});
    sc.appendChild(box);
  });
  // "ADD MELD" button — always shown (max 6 slots)
  if(rami.tahbatSlots.length<6){
    const addBtn=document.createElement('div');
    addBtn.style.cssText='display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:12px 16px;min-width:clamp(70px,10vw,120px);border:3px dashed #555;background:rgba(0,0,0,0.3);cursor:pointer;transition:border-color 0.1s;';
    addBtn.innerHTML='<div style="font-family:\'Press Start 2P\',monospace;font-size:clamp(16px,2.5vw,24px);color:#555;">+</div><div style="font-family:\'Press Start 2P\',monospace;font-size:clamp(5px,0.6vw,7px);color:#555;letter-spacing:1px;">ADD MELD</div>';
    addBtn.addEventListener('mouseenter',()=>{addBtn.style.borderColor='#888';addBtn.querySelector('div').style.color='#888';});
    addBtn.addEventListener('mouseleave',()=>{addBtn.style.borderColor='#555';addBtn.querySelector('div').style.color='#555';});
    addBtn.addEventListener('click',()=>{rami.tahbatSlots.push([]);rami.tahbatActive=rami.tahbatSlots.length-1;sfxClick();ramiRenderTahbatSlots();ramiCheckTahbatConfirm();});
    sc.appendChild(addBtn);
  }
}

function ramiRenderTahbatHand(){
  const he=document.getElementById('ramiTahbatHand');if(!he)return;he.innerHTML='';
  const mySlot = G.mp ? MP.mySlot : 0;
  const usedIndices=new Set();
  const hand=G.players[mySlot].hand;
  G.rami.tahbatSlots.flat().forEach(slotCard=>{
    const idx=hand.findIndex((c,i)=>!usedIndices.has(i)&&c.r===slotCard.r&&c.s===slotCard.s);
    if(idx>=0)usedIndices.add(idx);
  });
  hand.forEach((card,cardIdx)=>{
    const ir=card.s==='♥'||card.s==='♦'||card.r==='JK';
    const inSlot=usedIndices.has(cardIdx);
    const div=document.createElement('div');
    div.style.cssText='width:clamp(36px,5vw,54px);height:clamp(50px,7.2vw,74px);background:'+(inSlot?'#111':'#FFFCE8')+';border:3px solid '+(inSlot?'#222':'#555')+';display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;font-family:\'Press Start 2P\',monospace;box-shadow:2px 2px 0 #000;cursor:'+(inSlot?'default':'pointer')+';flex-shrink:0;opacity:'+(inSlot?'0.3':'1')+';transition:transform 0.1s;';
    div.innerHTML='<div style="font-size:clamp(10px,1.5vw,15px);font-weight:bold;color:'+(card.r==='JK'?'#FF00FF':(ir?'#CC0000':'#1a0800'))+';">'+card.r+'</div><div style="font-size:clamp(12px,1.8vw,19px);color:'+(card.r==='JK'?'#FF00FF':(ir?'#CC0000':'#1a0800'))+'">'+(card.s==='★'?'JK':card.s)+'</div>';
    if(!inSlot){div.addEventListener('mouseenter',()=>div.style.transform='translateY(-5px)');div.addEventListener('mouseleave',()=>div.style.transform='none');div.addEventListener('click',()=>{G.rami.tahbatSlots[G.rami.tahbatActive].push(card);ramiRenderTahbatSlots();ramiRenderTahbatHand();ramiCheckTahbatConfirm();sfxClick();});}
    he.appendChild(div);
  });
}

function ramiCheckTahbatConfirm(){
  const btn=document.getElementById('ramiTahbatConfirm');if(!btn)return;
  const mySlot = G.mp ? MP.mySlot : 0;
  const rami=G.rami;
  const filled=rami.tahbatSlots.filter(s=>s.length>=3);
  if(!filled.length){btn.style.display='none';return;}
  const invalid=filled.filter(s=>!isValidMeld(s));
  const valid=filled.filter(s=>isValidMeld(s));
  const score=calculateMeldScore(valid);
  const h=document.getElementById('ramiTahbatHint');
  if(invalid.length>0){btn.style.display='none';if(h)h.textContent='SLOT HAS INVALID MELD — FIX ORDER';return;}
  const openMin=G.ramiOpeningMin||51;
  if(!rami.hasOpened[mySlot]&&score<openMin){btn.style.display='none';if(h)h.textContent='NEED '+openMin+'+ PTS — CURRENTLY '+score+' PTS';return;}
  btn.style.display='';
  if(h)h.textContent='TOTAL: '+score+' PTS'+(score>=openMin?' ✓':'')+' — TAP CONFIRM';
}

function ramiTahbatConfirm(){
  const mySlot = G.mp ? MP.mySlot : 0;
  const rami=G.rami,p=G.players[mySlot];
  const slots=rami.tahbatSlots.filter(s=>s.length>=3&&isValidMeld(s));if(!slots.length)return;
  const total=calculateMeldScore(slots);

  // Check opening requirements before sending
  if(!rami.hasOpened[mySlot]){
    let highestOpening=G.ramiOpeningMin||51;
    G.players.forEach((pl,idx)=>{
      if(rami.hasOpened[idx]&&rami.openingScores[idx]>0){
        highestOpening=Math.max(highestOpening,rami.openingScores[idx]);
      }
    });
    if(total<=highestOpening){
      ramiSetMsg('NEED >'+(highestOpening)+' PTS TO OPEN! (YOU HAVE '+total+')');
      sfxLose();
      return;
    }
  }

  // In MP route through host-authority queue
  if(G.mp){
    ramiCloseTahbat();
    if(MP.isHost){
      MP.inputQueue.push({slot:mySlot, action:'open', melds:slots});
    } else {
      mpSend('rami_input',{slot:mySlot, action:'open', melds:JSON.stringify(slots)});
    }
    return;
  }

  // Single-player: apply directly
  if(!rami.hasOpened[mySlot]){
    let highestOpening=G.ramiOpeningMin||51;
    G.players.forEach((pl,idx)=>{
      if(rami.hasOpened[idx]&&rami.openingScores[idx]>0){
        highestOpening=Math.max(highestOpening,rami.openingScores[idx]);
      }
    });
    rami.hasOpened[mySlot]=true;
    rami.openingScores[mySlot]=total;
  }
  slots.forEach(slot=>{
    rami.tableMelds.push({owner:mySlot,cards:ramiSortMeld([...slot])});
    if(!p.laidMelds)p.laidMelds=[];
    p.laidMelds.push([...slot]);
    slot.map(c=>c.r+c.s).forEach(k=>{const i=p.hand.findIndex(c=>c.r+c.s===k);if(i>=0)p.hand.splice(i,1);});
  });
  sfxCoin();ramiCloseTahbat();
  if(p.hand.length===0){ramiEndRound(mySlot);return;}
  rami.playerPhase='play';ramiSetMsg('MELDS LAID! PLACE MORE OR DISCARD');renderRamiGame();
}

// ─── Action buttons ───────────────────────────────────────────
// Layout: turn pill | TAHBAT (always) | DISCARD card_name (when card selected)
function ramiRenderActionBtns(myTurn){
  const c=document.getElementById('ramiActionBtns');if(!c)return;c.innerHTML='';
  const rami=G.rami;
  const mySlot = G.mp ? MP.mySlot : 0;
  // Turn indicator pill
  const currentPlayer=G.players[rami.currentTurn];
  const isMyTurn=rami.currentTurn===mySlot;
  const pill=document.createElement('div');
  pill.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(8px,1.1vw,11px);padding:4px 12px;border:3px solid '+(isMyTurn?'#4CAF50':'#FF4444')+';color:'+(isMyTurn?'#4CAF50':'#FF4444')+';background:rgba(0,0,0,0.8);text-align:center;';
  pill.textContent=isMyTurn?'YOUR TURN':(currentPlayer.name+'\'S TURN');
  c.appendChild(pill);
  if(!myTurn||rami.playerPhase==='draw')return;

  // TAHBAT — always visible during play/discard phase
  const btnT=document.createElement('button');btnT.className='px-btn';
  btnT.style.cssText='font-size:clamp(9px,1.2vw,12px);padding:7px 14px;background:#6600CC;color:#fff;box-shadow:0 5px 0 #3d0080,3px 0 0 #3d0080,-3px 0 0 #3d0080;letter-spacing:1px;width:100%;';
  btnT.textContent='TAHBAT';btnT.addEventListener('click',()=>{ramiOpenTahbat();sfxClick();});
  c.appendChild(btnT);

  // DISCARD — only when a card is selected
  if(rami.selectedHandCard){
    const card=rami.selectedHandCard;
    const btn=document.createElement('button');btn.className='px-btn';
    btn.style.cssText='font-size:clamp(9px,1.1vw,12px);padding:7px 12px;width:100%;background:#AA2200;color:#fff;box-shadow:0 4px 0 #660000,3px 0 0 #660000,-3px 0 0 #660000;';
    btn.textContent='DISCARD  '+card.r+(card.s==='★'?'JK':card.s);
    btn.addEventListener('click',()=>{
      if(G.mp){
        // In MP, send discard action through host-authority pipeline
        if(MP.isHost){
          MP.inputQueue.push({slot:mySlot,action:'discard',card:{r:card.r,s:card.s}});
        } else {
          mpSend('rami_input',{slot:mySlot,action:'discard',card:{r:card.r,s:card.s}});
          rami.selectedHandCard=null; // optimistic UI clear
          renderRamiGame();
        }
      } else {
        ramiPlayerDiscard();
      }
    });
    c.appendChild(btn);
  }
}

// ─── Draw / discard actions ───────────────────────────────────
function ramiPlayerDraw(){
  if(G.mp && !MP.isHost) return;
  const mySlot = G.mp ? MP.mySlot : 0;
  if(G.busy||G.rami.currentTurn!==mySlot||G.rami.playerPhase!=='draw')return;
  const rami=G.rami;
  if(rami.drawPile.length===0){
    if(rami.discardPile.length<=1){ramiSetMsg('DRAW PILE EMPTY!');return;}
    const last=rami.discardPile.pop();
    rami.drawPile=shuffle(rami.discardPile);
    rami.discardPile=last?[last]:[];
  }
  if(rami.drawPile.length>0){G.players[mySlot].hand.push(rami.drawPile.pop());sfxCard();}
  ramiAfterDraw();
}
function ramiPlayerDrawDiscard(){
  if(G.mp && !MP.isHost) return;
  const mySlot = G.mp ? MP.mySlot : 0;
  if(G.busy||G.rami.currentTurn!==mySlot||G.rami.playerPhase!=='draw')return;
  const rami=G.rami;
  if(!rami.discardPile.length)return;
  if(rami.hasOpened[mySlot]){
    const card=rami.discardPile.pop();
    G.players[mySlot].hand.push(card);
    sfxCard();
    ramiAfterDraw();
    return;
  }
  const card=rami.discardPile.pop();
  G.players[mySlot].hand.push(card);
  const mm=bestMeldSet(G.players[mySlot].hand);
  if(!canOpen(mm)){
    // Can't open with this card — put it back, draw from pile instead
    G.players[mySlot].hand=G.players[mySlot].hand.filter(c=>!(c.r===card.r&&c.s===card.s));
    rami.discardPile.push(card);
    sfxLose();
    showToast('CANNOT OPEN WITH THIS CARD!');
    ramiSetMsg('CANNOT OPEN — DRAW FROM PILE INSTEAD');
    renderRamiGame();
    if(G.mp && MP.isHost) MP.snapshotDirty=true;
    return;
  }
  sfxCard();
  rami.playerPhase='play';
  ramiSetMsg('TOOK DISCARD — OPEN NOW! USE TAHBAT');
  renderRamiGame();
  if(G.mp && MP.isHost) MP.snapshotDirty=true;
}
function ramiAfterDraw(){
  const mySlot = G.mp ? MP.mySlot : 0;
  const rami=G.rami,p=G.players[mySlot];
  rami.playerPhase='play';rami.selectedHandCard=null;rami.tableSelCard=null;
  if(!rami.hasOpened[mySlot]){
    const mm=bestMeldSet(p.hand);
    if(canOpen(mm)){ramiSetMsg('YOU CAN OPEN! TAP TAHBAT');}
    else{ramiSetMsg('TAP A CARD TO DISCARD OR USE TAHBAT');}
  } else {
    ramiSetMsg('TAP A CARD TO DISCARD OR USE TAHBAT');
  }
  renderRamiGame();
  if(G.mp && MP.isHost) MP.snapshotDirty=true;
}
function ramiPlayerDiscard(){
  if(G.mp && !MP.isHost) return;
  const mySlot = G.mp ? MP.mySlot : 0;
  if(G.busy||G.rami.currentTurn!==mySlot)return;
  const rami=G.rami,p=G.players[mySlot],card=rami.selectedHandCard;
  if(!card)return;
  if(!ramiCanDiscard(card,p.hand,rami.tableMelds)){
    sfxLose();ramiSetMsg('CANNOT DISCARD — FITS A TABLE MELD!');
    showToast('CANNOT DISCARD — PLACE IT ON TABLE OR USE A DUPLICATE!');
    return;
  }
  const i=p.hand.findIndex(c=>c.r===card.r&&c.s===card.s);
  if(i>=0)p.hand.splice(i,1);
  rami.discardPile.push(card);
  rami.selectedHandCard=null;rami.tableSelCard=null;
  sfxCard();
  if(G.mp && MP.isHost) MP.snapshotDirty=true;
  if(p.hand.length===0){ramiEndRound(mySlot);return;}
  _ramiNextAiOrPlayer();
}

// ─── Round / game end ─────────────────────────────────────────
function ramiEndRound(wi){
  G.busy=true;
  const wn=G.players[wi];
  const winnerTeam = wn.team; // null if individual, 'A' or 'B' if teams
  let penMsg='';
  if(G.ramiTeamMode && winnerTeam){
    // Team 2v2: winners get 0 added. Each loser pays their own individual penalty.
    // The team score shown is the SUM of both members' individual scores.
    const losingTeam = winnerTeam==='A'?'B':'A';
    G.players.forEach(p=>{
      if(p.team===losingTeam){
        const pen=calculateRamiScore(p);
        p.score+=pen;
        penMsg+=p.name+' +'+pen+' ';
      }
      // winner team: nothing added (score unchanged)
    });
  } else {
    G.players.forEach(p=>{
      if(p.id===wi) return;
      if(winnerTeam && p.team===winnerTeam) return;
      const pen=calculateRamiScore(p);p.score+=pen;penMsg+=p.name+' +'+pen+' ';
    });
  }
  // Win bonus: if enabled, winner gets -10 (advantage for winning fast)
  // Only in offline mode, not MP
  if(!G.mp && window.ramiWinBonus){
    wn.score = Math.max(0, wn.score - 10);
    penMsg += wn.name + ' -10 ';
  }
  const roundLabel = winnerTeam ? wn.name+' (TEAM '+winnerTeam+')' : wn.name;
  showToast(roundLabel+' WINS ROUND '+G.round+'!'+(penMsg.trim()?' — '+penMsg.trim():''));
  if(G.mp && MP.isHost) MP.snapshotDirty=true;
  const mySlot = G.mp ? MP.mySlot : 0;
  if(wi===mySlot){sfxWin();launchConfetti();}else sfxLose();
  const target=G.ramiTarget||101;
  // Game over: in team mode, check if ANY member of a team has reached target
  const gameOver = G.ramiTeamMode
    ? (() => {
        const teamA = G.players.filter(p=>p.team==='A');
        const teamB = G.players.filter(p=>p.team==='B');
        return teamA.some(p=>p.score>=target) || teamB.some(p=>p.score>=target);
      })()
    : G.players.some(p=>p.score>=target);
  setTimeout(()=>{
    G.busy=false;
    if(gameOver){
      if(G.mp && MP.isHost) mpSendSnapshot({gameover:true});
      ramiEndGame();
      return;
    }
    ramiNextRound();
  },2200);
}
function ramiNextRound(){
  G.round++;
  const n=G.players.length;
  const deck=shuffle(createRamiDeck());
  G.players.forEach(p=>{p.hand=[];p.laidMelds=[];for(let i=0;i<14;i++)p.hand.push(deck.pop());});
  G.players.forEach(p=>{p.hand=ramiSortHand(p.hand);});
  const hasOpened={},banRounds={},openingScores={};
  G.players.forEach(p=>{hasOpened[p.id]=false;openingScores[p.id]=0;banRounds[p.id]=0;});
  const startTurn=G.round%n;
  G.rami={drawPile:deck,discardPile:[deck.pop()],tableMelds:[],hasOpened,banRounds,openingScores,
    currentTurn:startTurn,playerPhase:'draw',selectedHandCard:null,tableSelCard:null,
    tahbatOpen:false,tahbatSlots:[[]],tahbatActive:0};
  G.busy=true;

  showRoundBanner(G.round, 99, ()=>{
    G.busy=false;
    ramiUpdateRoundPill();
    renderRamiGame();
    if(G.mp){
      const mySlot=MP.mySlot;
      if(startTurn===mySlot){ramiSetMsg('YOUR TURN — DRAW A CARD');}
      else{ramiSetMsg(G.players[startTurn].name+'\'S TURN...');}
      if(MP.isHost){MP.snapshotDirty=true;mpSendSnapshot({newRound:true});mpStartTimer();}
      return;
    }
    if(startTurn===0){ramiSetMsg('YOUR TURN — DRAW A CARD');}
    else{ramiSetMsg(G.players[startTurn].name+' GOES FIRST...');setTimeout(ramiAiTurn,1100);}
  });
}
function ramiEndGame(){
  sfxWin();launchConfetti();
  const mySlot = G.mp ? MP.mySlot : 0;
  let winnerName, winnerScore;

  if(G.ramiTeamMode){
    // Team mode: team with LOWER combined score wins
    const scoreA = G.players.filter(p=>p.team==='A').reduce((s,p)=>s+p.score,0);
    const scoreB = G.players.filter(p=>p.team==='B').reduce((s,p)=>s+p.score,0);
    const winTeam = scoreA <= scoreB ? 'A' : 'B';
    const teamNames = G.players.filter(p=>p.team===winTeam).map(p=>p.name).join(' + ');
    winnerName = 'TEAM '+winTeam+' WINS!';
    document.getElementById('goWinner').textContent='★ '+teamNames;
    const sc=document.getElementById('goScores');sc.innerHTML='';
    ['A','B'].forEach(t=>{
      const members=G.players.filter(p=>p.team===t);
      const total=members.reduce((s,p)=>s+p.score,0);
      const won=t===winTeam;
      const row=document.createElement('div');
      row.className='score-row'+(won?' winner-row':'');
      row.innerHTML='<div class="sname">'+(won?'★ ':'')+'TEAM '+t+' ('+members.map(p=>p.name).join('+')+') </div><div class="spts">'+total+' / '+(G.ramiTarget||101)+'</div>';
      sc.appendChild(row);
    });
    const iWon = G.players.some(p=>p.id===mySlot&&p.team===winTeam);
    authAwardXp(iWon);
  } else {
    // Individual mode
    const sv=[...G.players].sort((a,b)=>a.score-b.score);
    const wn=sv[0];
    document.getElementById('goWinner').textContent='★ '+wn.name+' WINS!';
    const sc=document.getElementById('goScores');sc.innerHTML='';
    sv.forEach(p=>{const r=document.createElement('div');r.className='score-row'+(p.id===wn.id?' winner-row':'');r.innerHTML='<div class="sname">'+(p.id===wn.id?'★ ':'')+p.name+'</div><div class="spts">'+p.score+' / '+(G.ramiTarget||101)+'</div>';sc.appendChild(r);});
    authAwardXp(wn.id===mySlot);
  }

  setTimeout(()=>goTo('gameover'),1200);
}

// ─── 4-PLAYER RAMI UI ────────────────────────────────────────
// Reference layout:
//   TOP:    SAMI CARDS (horizontal backs near top edge)
//           SAMI info bar | SAMI melds row
//   LEFT:   LAYLA CARDS (vertical backs on left edge)
//           LAYLA info | LAYLA melds (vertical strip)
//   RIGHT:  KARIM CARDS (vertical backs on right edge)
//           KARIM info | KARIM melds (vertical strip)
//   CENTER: YOUR melds (horizontal, above draw/discard)
//           DRAW + DISCARD | message | action buttons
//   BOTTOM: YOU info bar | YOUR hand
function create4PRamiUI(){
  const gs=document.getElementById('game');
  const old=document.getElementById('ramiUI');if(old)old.remove();
  const ui=document.createElement('div');ui.id='ramiUI';
  // Full-screen absolute, flex column — no grid to avoid rotation issues
  ui.style.cssText='position:absolute;inset:0;z-index:100;pointer-events:auto;overflow:hidden;padding-top:clamp(44px,6.5vh,60px);';
  ui.innerHTML=`
<style>
#r4p-wrap{width:100%;height:100%;display:grid;grid-template-columns:clamp(100px,14vw,160px) 1fr clamp(100px,14vw,160px);grid-template-rows:auto 1fr auto;box-sizing:border-box;}
</style>
<div id="r4p-wrap">

<!-- ══ TOP: SAMI ══ -->
<div style="grid-column:1/4;grid-row:1;display:flex;flex-direction:column;align-items:center;padding:2px 4px;gap:1px;background:rgba(0,0,0,0.1);">
  <!-- Card backs row -->
  <div id="ramiAiCards" style="display:flex;justify-content:center;flex-wrap:nowrap;overflow:hidden;padding:1px 0;max-width:80%;gap:0;"></div>
  <!-- Info bar -->
  <div style="display:inline-flex;align-items:center;gap:6px;padding:2px 12px;background:rgba(0,0,0,0.85);border:2px solid #8B6914;">
    <div id="ramiP2TurnDot" style="width:8px;height:8px;background:#FF4444;border-radius:50%;display:none;box-shadow:0 0 5px #FF4444;flex-shrink:0;"></div>
    <span style="font-family:'Press Start 2P',monospace;font-size:clamp(7px,0.9vw,10px);color:#C9A84C;">${AI_NAMES[0]}</span>
    <span id="ramiP2Score" style="font-family:'Press Start 2P',monospace;font-size:clamp(7px,0.9vw,10px);color:#FFD700;font-weight:bold;">0</span>
    <span id="ramiP2Status" style="font-family:'Press Start 2P',monospace;font-size:clamp(5px,0.6vw,7px);color:#555;">NOT OPENED</span>
  </div>
  <!-- SAMI melds -->
  <div id="ramiP2Melds" style="display:flex;flex-wrap:wrap;gap:3px;justify-content:center;padding:1px 8px;min-height:clamp(32px,4.5vh,50px);max-height:clamp(80px,11vh,110px);overflow-y:auto;width:100%;"></div>
</div>

<!-- ══ LEFT: LAYLA ══ -->
<div style="grid-column:1;grid-row:2;display:flex;flex-direction:row;align-items:stretch;overflow:hidden;padding:2px 0;">
  <!-- Vertical card backs on the outer edge -->
  <div id="ramiP1Cards" style="display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0;overflow:hidden;padding:2px 1px;flex-shrink:0;"></div>
  <!-- Info + melds column inward -->
  <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;padding:4px 2px;overflow:hidden;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;padding:3px 5px;background:rgba(0,0,0,0.85);border:2px solid #8B6914;">
      <div id="ramiP1TurnDot" style="width:7px;height:7px;background:#FF4444;border-radius:50%;display:none;box-shadow:0 0 4px #FF4444;"></div>
      <span style="font-family:'Press Start 2P',monospace;font-size:clamp(5px,0.65vw,8px);color:#C9A84C;">${AI_NAMES[1]}</span>
      <span id="ramiP1Score" style="font-family:'Press Start 2P',monospace;font-size:clamp(5px,0.65vw,8px);color:#FFD700;font-weight:bold;">0</span>
      <span id="ramiP1Status" style="font-family:'Press Start 2P',monospace;font-size:clamp(4px,0.5vw,6px);color:#555;">NOT OPENED</span>
    </div>
    <div id="ramiP1Melds" style="display:flex;flex-direction:column;gap:2px;align-items:center;overflow-y:auto;flex:1;width:100%;padding:0 2px;"></div>
  </div>
</div>

<!-- ══ CENTER ══ -->
<div style="grid-column:2;grid-row:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:4px 8px;overflow:hidden;">
  <!-- Draw + Discard -->
  <div style="display:flex;align-items:flex-end;gap:clamp(10px,2vw,22px);">
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
      <div id="ramiDrawPile" onclick="G.mp?ramiMpDraw():ramiPlayerDraw()" style="position:relative;width:clamp(58px,8vw,78px);height:clamp(66px,9vw,88px);cursor:pointer;transition:transform 0.1s;">
        <div class="rami-back-card" style="position:absolute;top:0;left:0;width:clamp(48px,6.6vw,64px);height:clamp(66px,9vw,88px);"></div>
        <div class="rami-back-card" style="position:absolute;top:0;left:clamp(5px,0.8vw,9px);width:clamp(48px,6.6vw,64px);height:clamp(66px,9vw,88px);"></div>
        <div class="rami-back-card" style="position:absolute;top:0;left:clamp(10px,1.6vw,18px);width:clamp(48px,6.6vw,64px);height:clamp(66px,9vw,88px);display:flex;align-items:flex-end;justify-content:center;padding-bottom:3px;">
          <span id="ramiDrawCount" style="font-family:'Press Start 2P',monospace;color:#FFD700;font-size:clamp(7px,0.9vw,10px);background:rgba(0,0,0,0.75);padding:1px 4px;">0</span>
        </div>
      </div>
      <span style="font-family:'Press Start 2P',monospace;font-size:clamp(5px,0.6vw,7px);color:#666;background:rgba(0,0,0,0.65);padding:1px 5px;letter-spacing:1px;">DRAW</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
      <div id="ramiDiscardPile" onclick="G.mp?ramiMpDrawDiscard():ramiPlayerDrawDiscard()" style="width:clamp(52px,7.2vw,72px);height:clamp(72px,10vw,96px);background:#1a0800;border:3px solid #8B6914;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;cursor:pointer;box-shadow:3px 3px 0 #000;transition:border-color 0.12s,transform 0.1s;">
        <div id="ramiDiscardRank" style="font-family:'Press Start 2P',monospace;font-size:clamp(15px,2.2vw,26px);font-weight:bold;color:#FFD700;"></div>
        <div id="ramiDiscardSuit" style="font-size:clamp(17px,2.5vw,30px);"></div>
      </div>
      <span style="font-family:'Press Start 2P',monospace;font-size:clamp(5px,0.6vw,7px);color:#666;background:rgba(0,0,0,0.65);padding:1px 5px;letter-spacing:1px;">DISCARD</span>
    </div>
  </div>
  <!-- Message -->
  <div id="ramiMsg" style="font-family:'Press Start 2P',monospace;font-size:clamp(7px,1vw,11px);color:#FFD700;text-align:center;padding:2px 8px;background:rgba(0,0,0,0.6);min-width:clamp(160px,22vw,280px);letter-spacing:1px;"></div>
  <!-- Action buttons -->
  <div id="ramiActionBtns" style="display:flex;flex-direction:column;gap:5px;align-items:center;width:clamp(160px,22vw,280px);"></div>
</div>

<!-- ══ RIGHT: KARIM ══ -->
<div style="grid-column:3;grid-row:2;display:flex;flex-direction:row-reverse;align-items:stretch;overflow:hidden;padding:2px 0;">
  <!-- Vertical card backs on the outer edge -->
  <div id="ramiP3Cards" style="display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0;overflow:hidden;padding:2px 1px;flex-shrink:0;"></div>
  <!-- Info + melds column inward -->
  <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;padding:4px 2px;overflow:hidden;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;padding:3px 5px;background:rgba(0,0,0,0.85);border:2px solid #8B6914;">
      <div id="ramiP3TurnDot" style="width:7px;height:7px;background:#FF4444;border-radius:50%;display:none;box-shadow:0 0 4px #FF4444;"></div>
      <span style="font-family:'Press Start 2P',monospace;font-size:clamp(5px,0.65vw,8px);color:#C9A84C;">${AI_NAMES[2]}</span>
      <span id="ramiP3Score" style="font-family:'Press Start 2P',monospace;font-size:clamp(5px,0.65vw,8px);color:#FFD700;font-weight:bold;">0</span>
      <span id="ramiP3Status" style="font-family:'Press Start 2P',monospace;font-size:clamp(4px,0.5vw,6px);color:#555;">NOT OPENED</span>
    </div>
    <div id="ramiP3Melds" style="display:flex;flex-direction:column;gap:2px;align-items:center;overflow-y:auto;flex:1;width:100%;padding:0 2px;"></div>
  </div>
</div>

<!-- ══ BOTTOM: YOU ══ -->
<div style="grid-column:1/4;grid-row:3;display:flex;flex-direction:column;align-items:center;flex-shrink:0;padding:0 0 2px;">
  <!-- YOUR melds (shown below draw/discard, above YOU info) -->
  <div id="ramiPlayerMelds" style="display:flex;flex-wrap:wrap;gap:3px;justify-content:center;max-height:clamp(80px,11vh,110px);overflow-y:auto;padding:2px 4px;width:100%;margin-bottom:3px;"></div>
  <div style="display:inline-flex;align-items:center;gap:6px;padding:2px 12px;background:rgba(0,0,0,0.88);border:2px solid #FFD700;margin-bottom:2px;">
    <div id="ramiPlayerTurnDot" style="width:8px;height:8px;background:#4CAF50;border-radius:50%;display:none;box-shadow:0 0 5px #4CAF50;flex-shrink:0;"></div>
    <span style="font-family:'Press Start 2P',monospace;font-size:clamp(7px,0.9vw,10px);color:#FFD700;">YOU</span>
    <span id="ramiPlayerScore" style="font-family:'Press Start 2P',monospace;font-size:clamp(7px,0.9vw,10px);color:#FFD700;font-weight:bold;">0</span>
    <span id="ramiPlayerStatus" style="font-family:'Press Start 2P',monospace;font-size:clamp(5px,0.6vw,7px);color:#555;">NOT OPENED</span>
    <span id="ramiBanDisplay" style="font-family:'Press Start 2P',monospace;font-size:clamp(5px,0.6vw,7px);color:#FF4444;display:none;"></span>
  </div>
  <div id="ramiPlayerHand" style="display:flex;gap:clamp(2px,0.4vw,5px);flex-wrap:nowrap;justify-content:center;overflow-x:auto;padding:0 6px 3px;flex-shrink:0;"></div>
</div>

<!-- TAHBAT OVERLAY -->
<div id="ramiTahbat" style="display:none;position:absolute;inset:0;z-index:300;background:rgba(0,0,0,0.93);flex-direction:column;align-items:center;justify-content:flex-start;gap:8px;padding:clamp(14px,2.5vh,24px) 14px;overflow-y:auto;">
  <div style="font-family:'Press Start 2P',monospace;font-size:clamp(14px,2vw,20px);color:#FFD700;letter-spacing:3px;text-shadow:3px 3px 0 #000;flex-shrink:0;">TAHBAT</div>
  <div id="ramiTahbatHint" style="font-family:'Press Start 2P',monospace;font-size:clamp(7px,0.85vw,9px);color:#C9A84C;text-align:center;line-height:1.9;padding:3px 8px;background:rgba(0,0,0,0.6);flex-shrink:0;">STACK YOUR MELDS — LOADING...</div>
  <div id="ramiTahbatSlots" style="display:flex;gap:clamp(6px,1.2vw,14px);flex-wrap:wrap;justify-content:center;flex-shrink:0;"></div>
  <div style="font-family:'Press Start 2P',monospace;font-size:clamp(6px,0.7vw,8px);color:#555;letter-spacing:2px;padding:1px 6px;background:rgba(0,0,0,0.5);flex-shrink:0;">── YOUR HAND ──</div>
  <div id="ramiTahbatHand" style="display:flex;gap:clamp(3px,0.5vw,6px);flex-wrap:wrap;justify-content:center;max-width:100%;padding:4px;flex-shrink:0;"></div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:4px;flex-shrink:0;">
    <button id="ramiTahbatConfirm" class="px-btn px-btn-green" style="font-size:clamp(8px,1vw,11px);display:none;" onclick="ramiTahbatConfirm()">CONFIRM MELDS</button>
    <button class="px-btn px-btn-red" style="font-size:clamp(8px,1vw,11px);" onclick="ramiCloseTahbat()">CANCEL</button>
  </div>
</div>

</div><!-- end r4p-wrap -->
`;
  gs.appendChild(ui);
}

// Render 4-player Rami — separate from 2-player renderRamiGame()
function render4PRamiGame(){
  if(!G.rami)return;
  const rami=G.rami,p=G.players[0],myTurn=rami.currentTurn===0&&!G.busy;
  ramiUpdateRoundPill();

  // ── Scores / status / turn dots ──
  const pDefs=[
    {scoreId:'ramiPlayerScore',statusId:'ramiPlayerStatus',dotId:'ramiPlayerTurnDot',banId:'ramiBanDisplay'},
    {scoreId:'ramiP1Score',statusId:'ramiP1Status',dotId:'ramiP1TurnDot',banId:null},
    {scoreId:'ramiP2Score',statusId:'ramiP2Status',dotId:'ramiP2TurnDot',banId:null},
    {scoreId:'ramiP3Score',statusId:'ramiP3Status',dotId:'ramiP3TurnDot',banId:null},
  ];
  G.players.forEach((pl,i)=>{
    const def=pDefs[i];
    const sc=document.getElementById(def.scoreId);
    if(sc){
      // In team mode show combined team score for clarity
      if(G.ramiTeamMode && pl.team){
        // Show sum of both teammates' individual scores
        const teamTotal = G.players.filter(p=>p.team===pl.team).reduce((s,p)=>s+p.score,0);
        sc.textContent = teamTotal+' ['+pl.team+']';
        sc.style.color = pl.team==='A'?'#FFD700':'#FF8C00';
      } else {
        sc.textContent = pl.score;
        sc.style.color = '#FFD700';
      }
    }
    const st=document.getElementById(def.statusId);if(st){st.textContent=rami.hasOpened[pl.id]?'OPENED':'NOT OPENED';st.style.color=rami.hasOpened[pl.id]?'#4CAF50':'#555';}
    const dot=document.getElementById(def.dotId);if(dot)dot.style.display=(rami.currentTurn===pl.id)?'':'none';
    if(def.banId){const be=document.getElementById(def.banId);if(be){const ban=rami.banRounds&&rami.banRounds[pl.id]||0;be.textContent=ban>0?'BANNED '+ban+'T':'';be.style.display=ban>0?'':'none';}}
  });

  // ── Draw pile ──
  const dc=document.getElementById('ramiDrawCount');if(dc)dc.textContent=rami.drawPile.length;
  const de=document.getElementById('ramiDrawPile');
  if(de){const a=myTurn&&rami.playerPhase==='draw';de.style.cursor=a?'pointer':'default';de.style.transform=a?'translateY(-3px)':'none';}

  // ── Discard pile ──
  const top=rami.discardPile[rami.discardPile.length-1];
  const dr=document.getElementById('ramiDiscardRank'),ds_=document.getElementById('ramiDiscardSuit');
  if(dr&&ds_){if(top){const ir=top.s==='♥'||top.s==='♦';dr.textContent=top.r;dr.style.color=top.r==='JK'?'#FF88FF':(ir?'#FF4444':'#FFFCE8');ds_.textContent=top.s==='★'?'JK':top.s;ds_.style.color=ir?'#FF4444':'#FFFCE8';}else{dr.textContent='';ds_.textContent='';}}
  const dpe=document.getElementById('ramiDiscardPile');
  if(dpe){const a=myTurn&&rami.playerPhase==='draw'&&!!top;dpe.style.cursor=a?'pointer':'default';dpe.style.borderColor=a?'#FFD700':'#8B6914';}

  // ── Opponent hidden hands ──
  // SAMI (top) — horizontal small backs
  const aceEl=document.getElementById('ramiAiCards');
  if(aceEl){aceEl.innerHTML='';G.players[2].hand.forEach((_,ci)=>{const bc=document.createElement('div');bc.className='rami-back-card';bc.style.cssText='width:clamp(22px,3vw,36px);height:clamp(32px,4.4vw,52px);flex-shrink:0;'+(ci>0?'margin-left:-10px':'');aceEl.appendChild(bc);});}
  // LAYLA (left) — vertical small backs
  const p1ce=document.getElementById('ramiP1Cards');
  if(p1ce){p1ce.innerHTML='';G.players[1].hand.forEach((_,ci)=>{const bc=document.createElement('div');bc.className='rami-back-card';bc.style.cssText='width:clamp(30px,4.2vw,50px);height:clamp(20px,2.8vw,34px);flex-shrink:0;'+(ci>0?'margin-top:-12px':'');p1ce.appendChild(bc);});}
  // KARIM (right) — vertical small backs
  const p3ce=document.getElementById('ramiP3Cards');
  if(p3ce){p3ce.innerHTML='';G.players[3].hand.forEach((_,ci)=>{const bc=document.createElement('div');bc.className='rami-back-card';bc.style.cssText='width:clamp(30px,4.2vw,50px);height:clamp(20px,2.8vw,34px);flex-shrink:0;'+(ci>0?'margin-top:-12px':'');p3ce.appendChild(bc);});}

  // ── Melds per player zone ──
  const meldZones={0:'ramiPlayerMelds',1:'ramiP1Melds',2:'ramiP2Melds',3:'ramiP3Melds'};
  Object.entries(meldZones).forEach(([pid,elId])=>{
    const el=document.getElementById(elId);if(!el)return;el.innerHTML='';
    const isVertical=(pid==='1'||pid==='3');
    const selCard=rami.tableSelCard;
    const canInteract=myTurn&&rami.hasOpened[0]&&rami.playerPhase==='play';
    rami.tableMelds.filter(m=>m.owner===parseInt(pid)).forEach(meld=>{
      const mi=rami.tableMelds.indexOf(meld);
      const canPlace=canInteract&&selCard&&canPlaceCardInMeld(selCard,meld.cards);
      const hasJoker=canInteract&&selCard&&canReplaceJoker(selCard,meld.cards)!==-1;
      const isActive=canInteract&&selCard;
      const bc=hasJoker?'#FF00FF':canPlace?'#44FF88':isActive?'#FF4444':(pid==='0'?'#FFD700':'#FF6644');
      const md=document.createElement('div');
      md.style.cssText='display:flex;gap:2px;align-items:center;padding:2px 4px;background:rgba(0,0,0,0.55);border:2px solid '+bc+';cursor:'+(canPlace||hasJoker?'pointer':'default')+';'+(isVertical?'flex-wrap:wrap;max-width:clamp(60px,8vw,90px);':'');
      if(hasJoker){const t=document.createElement('div');t.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(4px,0.5vw,6px);color:#FF00FF;flex-shrink:0;';t.textContent='JK!';md.appendChild(t);}
      else if(canPlace){const t=document.createElement('div');t.style.cssText='font-family:\'Press Start 2P\',monospace;font-size:clamp(4px,0.5vw,6px);color:#44FF88;flex-shrink:0;';t.textContent='+';md.appendChild(t);}
      ramiSortMeld(meld.cards).forEach(c=>{
        const sm=ramiSmallCard(c,c.r==='JK'&&hasJoker);
        if(isVertical){sm.style.width='clamp(22px,3vw,34px)';sm.style.height='clamp(30px,4.3vw,50px)';}
        md.appendChild(sm);
      });
      if(canPlace||hasJoker)md.addEventListener('click',()=>ramiPlayerPlaceOnTable(mi));
      el.appendChild(md);
    });
  });

  // ── Player hand ──
  const he=document.getElementById('ramiPlayerHand');
  if(he){
    he.innerHTML='';
    p.hand.forEach((card,i)=>{
      const ir=card.s==='♥'||card.s==='♦'||card.r==='JK';
      const isSel=rami.selectedHandCard&&rami.selectedHandCard.r===card.r&&rami.selectedHandCard.s===card.s;
      const div=document.createElement('div');
      div.dataset.idx=i;div.draggable=true;
      div.style.cssText=`width:clamp(38px,5.2vw,58px);height:clamp(52px,7.5vw,80px);background:${isSel?'#1a0a00':'#FFFCE8'};border:3px solid ${isSel?'#FFD700':'#555'};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;cursor:${myTurn&&rami.playerPhase!=='draw'?'pointer':'grab'};font-family:'Press Start 2P',monospace;box-shadow:${isSel?'0 0 8px #FFD700,':''} 2px 2px 0 #000;transform:${isSel?'translateY(-8px)':'none'};transition:transform 0.1s;flex-shrink:0;`;
      div.innerHTML='<div style="font-size:clamp(11px,1.5vw,16px);font-weight:bold;color:'+(card.r==='JK'?'#FF00FF':(ir?'#CC0000':'#1a0800'))+';">'+card.r+'</div><div style="font-size:clamp(12px,1.7vw,19px);color:'+(card.r==='JK'?'#FF00FF':(ir?'#CC0000':'#1a0800'))+'">'+(card.s==='★'?'JK':card.s)+'</div>';
      if(myTurn&&rami.playerPhase!=='draw')div.addEventListener('click',()=>ramiHandCardClick(card));
      div.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',i);div.style.opacity='0.4';});
      div.addEventListener('dragend',()=>{div.style.opacity='1';});
      div.addEventListener('dragover',e=>e.preventDefault());
      div.addEventListener('drop',e=>{e.preventDefault();const from=parseInt(e.dataTransfer.getData('text/plain'));const to=parseInt(div.dataset.idx);if(from===to)return;const arr=G.players[0].hand;const[mv]=arr.splice(from,1);arr.splice(to,0,mv);renderRamiGame();});
      he.appendChild(div);
    });
  }
  ramiRenderActionBtns(myTurn);
  if(rami.tahbatOpen)ramiRenderTahbatHand();
}

// ─── MP input wrappers (called from onclick in both 2p and 4p UIs) ───────────
function ramiMpDraw(){
  if(!G.rami) return;
  const mySlot = MP.mySlot;
  if(G.rami.currentTurn !== mySlot) return;
  if(G.rami.playerPhase !== 'draw') return; // already drew this turn
  if(G.busy) return;
  if(MP.isHost){
    MP.inputQueue.push({slot:mySlot, action:'draw'});
  } else {
    // Optimistically flip phase locally so spam-clicks are blocked before snapshot arrives
    G.rami.playerPhase = 'play';
    renderRamiGame();
    mpSend('rami_input',{slot:mySlot, action:'draw'});
  }
}
function ramiMpDrawDiscard(){
  if(!G.rami) return;
  const mySlot = MP.mySlot;
  if(G.rami.currentTurn !== mySlot) return;
  if(G.rami.playerPhase !== 'draw') return; // already drew this turn
  if(G.busy) return;
  if(MP.isHost){
    MP.inputQueue.push({slot:mySlot, action:'draw_discard'});
  } else {
    // Optimistically flip phase locally so spam-clicks are blocked before snapshot arrives
    G.rami.playerPhase = 'play';
    renderRamiGame();
    mpSend('rami_input',{slot:mySlot, action:'draw_discard'});
  }
}
function ramiMpPlaceOnTable(meldIndex, card){
  if(!G.rami || !card) return;
  const mySlot = MP.mySlot;
  if(G.rami.currentTurn !== mySlot) return;
  if(!G.mp){
    // Single-player: apply directly
    G.rami.tableSelCard = card;
    ramiPlayerPlaceOnTable(meldIndex);
    return;
  }
  if(MP.isHost){
    MP.inputQueue.push({slot:mySlot, action:'place', card:{r:card.r,s:card.s}, meldIndex});
  } else {
    // Optimistic local clear so UI feels responsive
    G.rami.tableSelCard = null;
    G.rami.selectedHandCard = null;
    renderRamiGame();
    mpSend('rami_input',{slot:mySlot, action:'place', card:{r:card.r,s:card.s}, meldIndex});
  }
}

// ─── Host-authority apply functions (used by mpHostTick) ─────────────────────
// These never use MP.mySlot — the slot is passed in explicitly by the host tick.

function ramiApplyDraw(slot){
  const rami = G.rami, p = G.players[slot];
  if(rami.drawPile.length === 0){
    if(rami.discardPile.length <= 1){ ramiSetMsg('DRAW PILE EMPTY!'); return; }
    const last = rami.discardPile.pop();
    rami.drawPile = shuffle(rami.discardPile);
    rami.discardPile = last ? [last] : [];
  }
  if(rami.drawPile.length > 0){ p.hand.push(rami.drawPile.pop()); sfxCard(); }
  ramiApplyAfterDraw(slot);
}

function ramiApplyDrawDiscard(slot){
  const rami = G.rami, p = G.players[slot];
  if(!rami.discardPile.length) return;
  if(rami.hasOpened[slot]){
    const card = rami.discardPile.pop();
    p.hand.push(card); sfxCard();
    ramiApplyAfterDraw(slot);
    return;
  }
  const card = rami.discardPile.pop();
  p.hand.push(card);
  const mm = bestMeldSet(p.hand);
  if(!canOpen(mm)){
    // Can't open — put it back, no ban
    p.hand = p.hand.filter(c=>!(c.r===card.r&&c.s===card.s));
    rami.discardPile.push(card);
    sfxLose();
    ramiSetMsg(p.name + ' CANNOT OPEN — DREW FROM PILE');
    if(rami.drawPile.length > 0){ p.hand.push(rami.drawPile.pop()); }
    ramiApplyAfterDraw(slot);
    return;
  }
  sfxCard();
  rami.playerPhase = 'play';
  ramiSetMsg(p.name + ' TOOK DISCARD — MUST OPEN NOW!');
  renderRamiGame();
  MP.snapshotDirty = true;
}

function ramiApplyAfterDraw(slot){
  const rami = G.rami, p = G.players[slot];
  rami.playerPhase = 'play';
  rami.selectedHandCard = null; rami.tableSelCard = null;
  const mySlot = MP.mySlot;
  if(slot === mySlot){
    // It was the host's own draw — use player-facing message
    if(!rami.hasOpened[slot]){
      const mm = bestMeldSet(p.hand);
      ramiSetMsg(canOpen(mm) ? 'YOU CAN OPEN! TAP TAHBAT' : 'TAP A CARD TO DISCARD OR USE TAHBAT');
    } else {
      ramiSetMsg('TAP A CARD TO DISCARD OR USE TAHBAT');
    }
  } else {
    ramiSetMsg(p.name + ' DREW — WAITING FOR THEIR MOVE...');
  }
  renderRamiGame();
  MP.snapshotDirty = true;
}

function ramiApplyDiscard(slot, card){
  const rami = G.rami, p = G.players[slot];
  if(!ramiCanDiscard(card, p.hand, rami.tableMelds)){
    ramiSetMsg(p.name + ' TRIED ILLEGAL DISCARD — BLOCKED');
    return;
  }
  const i = p.hand.findIndex(c=>c.r===card.r&&c.s===card.s);
  if(i >= 0) p.hand.splice(i, 1);
  rami.discardPile.push(card);
  rami.selectedHandCard = null; rami.tableSelCard = null;
  sfxCard();
  MP.snapshotDirty = true;
  if(p.hand.length === 0){ ramiEndRound(slot); return; }
  _ramiNextAiOrPlayer();
}

// *** END RAMI SECTION ***

// ============================================================
// MULTIPLAYER RAMI
// ============================================================

function mpStartRamiGame(){
  const ramiTarget = MP.selectedRamiTarget || 101;

  // Build 2 human players
  const gamePlayers = [
    {id:0, name:MP.players[0].nick, score:0, hand:[], laidMelds:[], isAI:false, mpId:MP.players[0].id},
    {id:1, name:MP.players[1].nick, score:0, hand:[], laidMelds:[], isAI:false, mpId:MP.players[1].id}
  ];

  // Deal 14 cards each from a fresh Rami deck
  const deck = shuffle(createRamiDeck());
  gamePlayers.forEach(p=>{ for(let i=0;i<14;i++) p.hand.push(deck.pop()); });
  // Sort both hands (host has full view; guest will sort their own on receive)
  gamePlayers[0].hand = ramiSortHand(gamePlayers[0].hand);
  gamePlayers[1].hand = ramiSortHand(gamePlayers[1].hand);

  const hasOpened={0:false,1:false};
  const openingScores={0:0,1:0};
  const banRounds={0:0,1:0};

  const ramiState = {
    drawPile: deck,
    discardPile: [deck.pop()],
    tableMelds: [],
    hasOpened, banRounds, openingScores,
    currentTurn: 0,
    playerPhase: 'draw',
    selectedHandCard: null,
    tableSelCard: null,
    tahbatOpen: false,
    tahbatSlots: [[]],
    tahbatActive: 0
  };

  // Broadcast start to all players
  mpSend('start', {
    game: 'rami',
    players: JSON.stringify(MP.players),
    gamePlayers: JSON.stringify(gamePlayers),
    ramiState: JSON.stringify(ramiState),
    ramiTarget: ramiTarget
  });

  mpBeginRami(gamePlayers, ramiState, ramiTarget);
}

function mpBeginRami(gamePlayers, ramiState, ramiTarget){
  MP.active = true;
  MP.inputQueue = [];
  MP.seqIn = {};
  MP.mySlot = MP.players.findIndex(p=>p.id===MP.myId);

  G = {
    gameType: 'rami',
    ramiPlayerCount: 2,
    round: 1,
    totalRounds: 999,
    ramiTarget: ramiTarget || 101,
    ramiOpeningMin: 51,
    players: gamePlayers,
    rami: ramiState,
    busy: false,
    mp: true
  };

  goTo('game');

  // Hide 51 and Chkobba UIs — Rami builds its own
  const gameContent = document.getElementById('gameContent');
  if(gameContent) gameContent.style.display = 'none';
  const chkobbaUI = document.getElementById('chkobbaUI');
  if(chkobbaUI) chkobbaUI.style.display = 'none';
  // Remove any old Rami UI
  const oldRami = document.getElementById('ramiUI');
  if(oldRami) oldRami.remove();

  showCountdown(()=>{
    createRamiUI();
    renderRamiGame();
    ramiUpdateRoundPill();
    const mySlot = MP.mySlot;
    const startTurn = G.rami.currentTurn;
    showRoundBanner(1, 99, ()=>{
      if(startTurn === mySlot) ramiSetMsg('YOUR TURN — DRAW A CARD');
      else ramiSetMsg(G.players[startTurn].name + '\'S TURN...');
      if(MP.isHost){ mpStartHostTick(); mpStartHeartbeat(); mpStartTimer(); }
    });
    setChatBtnVisible(true);
    clearChat();
  });
}