document.addEventListener('DOMContentLoaded', () => {
console.log('GEOTRASH 242 - SYSTEM ONLINE');
 insertRandomImages();
 }


  // Random cyberpunk/abstract image URLs
    const randomImages = [
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=300&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop&auto=format'
    ];

    // Insert random images into cards
    function insertRandomImages() {
    for (let i = 1; i <= 3; i++) {
        const container = document.getElementById(`card-image-${i}`);
        
        if (container) {
            console.log(`Found container #card-image-${i}`);
            
            // Clear existing content if needed
            container.innerHTML = '';
            
            const img = document.createElement('img');
            const randomIndex = Math.floor(Math.random() * randomImages.length);
            
            // Set image attributes
            img.src = randomImages[randomIndex];
            img.alt = `Product ${i}`;
            img.className = 'card-image';
            
            // Add error handling
            img.onerror = function() {
                console.error(`Failed to load image: ${img.src}`);
                // Optional: Set a fallback image
                this.src = 'https://via.placeholder.com/400x300/1a1a2e/e0e0ff?text=Cyber+Image';
            };
            
            img.onload = function() {
                console.log(`Image ${i} loaded successfully`);
            };
            
            container.appendChild(img);
        } else {
            console.error(`Container #card-image-${i} not found!`);
        }
    }
}


    const terminalOutput = document.getElementById('terminalOutput');
    const statusText = document.getElementById('statusText');
    const footerStatus = document.getElementById('footerStatus');
    
      const asciiArt = [
      `  ╭━━━━━━━━━━━━━━╮
┃   (⌐■_■)   ┃
┃  /     \\   ┃
┃  \\_____/   ┃
╰━━━━━━━━━━━━━━╯`,
      `  ╔══════════════╗
║   ┌─┐        ║
║   │●│  BZZT  ║
║   └─┘        ║
╚══════════════╝`,
      `  [▰▰▰▰▰▰▰▰▰▰]
 LOADING...
[■■■■■■■■■■]`,
      `  ╭──────────────╮
│ WEdidntASK   │
│   forTHIS    │
╰──────────────╯`,
      `  ┌────────────────┐
│ weSTILLdont  │
│  believeyou  │
└────────────────┘`,
      `  ╔════════════════╗
║    GEO        ║
║    TRASH      ║
║      242      ║
╚════════════════╝`,
      `  ┌────────────────┐
│   GEOTRASH    │
│   WEdidnt     │
│   ASKforTHIS  │
└────────────────┘`,
      `  ╭──────────────╮
│ 242         │
│ weSTILL     │
│ dontbelieve │
╰──────────────╯`,
      `  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█  GEOTRASH   █
█   242       █
█   dontASK   █
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`,
      `  ┌──────────────┐
│ WEdidnt      │
│ GEOTRASH     │
│ 242forTHIS   │
└──────────────┘`,
      `  ╔══════════════╗
║ weSTILL     ║
║ GEOTRASH    ║
║  242        ║
╚══════════════╝`,
      `  ░░░░░░░░░░░░░░░░
░ GEO ░ TRASH ░
░  242  dont   ░
░  believeyou  ░
░░░░░░░░░░░░░░░░`,
      `  ╭──────────────╮
│ 242        │
│ WEdidntASK │
│ forTRASH   │
╰──────────────╯`,
      `  ┌────────────────┐
│ weSTILLdont │
│ GEOTRASH242 │
│ believeyou  │
└────────────────┘`,
      `  ╔════════════════╗
║   GEOTRASH    ║
║   242dont     ║
║   ASKforTHIS  ║
╚════════════════╝`,
      `  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ WEdidntASK  █
█ forGEOTRASH █
█     242     █
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`,
      `  ┌──────────────┐
│ GEOTRASH242 │
│ weSTILLdont │
│ believeyou  │
└──────────────┘`,
      `  ╭──────────────╮
│ 242GEOTRASH │
│ WEdidntASK  │
│ forTHIS     │
╰──────────────╯`,
      `  ░░░░░░░░░░░░░░░░░
░ weSTILLdont ░
░ GEOTRASH242 ░
░  believeyou ░
░░░░░░░░░░░░░░░░░`,
      `  ┌────────────────┐
│   GEOTRASH    │
│   242WE       │
│   didntASK    │
└────────────────┘`
  ];
    const headroomQuotes = [
        "C-c-catch the wave of the future!",
        "I'm thinking... but nothing's happening!",
        "Television: the box they buried civilization in.",
        "In the future, mistakes will be called 'features'.",
        "My brain is like a sponge... a dry sponge.",
        "I'd explain it to you, but your brain would explode.",
        "Reality is overrated anyway.",
        "I'm not confused, I'm just multi-directional.",
        "Anybody who isn't confused here isn't thinking clearly.",
        "Confusion is the welcome mat at the door of creativity.",
        "Television is the literature of the illiterate.",
        "I never make mistakes. I make predictions which immediately turn out to be wrong.",
        "In the future, everyone will be anonymous for fifteen minutes.",
        "My ratings are so low, I need a submarine to find them.",
        "The future isn't what it used to be.",
        "If you're not confused, you're not paying attention.",
        "I've seen the future and it's just like the present, only longer.",
        "C-c-catch you later!",
        "Reality is just a collective hunch.",
        "In the future, everyone will want to be unique, just like everyone else.",
        "The future is a forgotten game that nobody remembers the rules to anymore.",
        "C-c-catch the wave of the future before it catches you!",
        "I'm so far ahead of my time, I'm still in yesterday.",
        "If your brain was chocolate, it wouldn't fill an M&M."
    ];
    
    const deepThoughts = [
        "What patterns have you woven without questioning?",
        "Every seam tells a story of resistance or compliance.",
        "The uniform whispers 'blend in'. Listen for the shout.",
        "Your silhouette is your first statement to the world.",
        "Threads hold memories. What are yours remembering?",
        "Fabric that forgets is fabric that conforms.",
        "The most radical textile is one that teaches.",
        "A button undone is a question asked.",
        "What armor do you need for today's consensus?",
        "We don't make clothes. We make questions you can wear."
    ];
    
    // Generate random IDs for cards
    function generateRandomId() {
        return Math.floor(Math.random() * 900 + 100).toString().padStart(3, '0');
    }
    
    // Update card IDs on page load
    document.querySelectorAll('.random-id').forEach(el => {
        el.textContent = generateRandomId();
    });
    
    function addTerminalElement(type, content, delay = 0) {
        setTimeout(() => {
            const element = document.createElement('div');
            
            switch(type) {
                case 'ascii':
                    element.className = 'ascii-art';
                    element.textContent = content;
                    break;
                case 'quote':
                    element.className = 'quote';
                    element.innerHTML = `~ "${content}" <span style="color: var(--accent-green); font-size: 0.7rem;">— Max Headroom</span>`;
                    break;
                case 'thought':
                    element.className = 'thought';
                    element.innerHTML = `$ 🌐🗑 ~ ${content}`;
                    break;
                case 'system':
                    element.className = 'terminal-line';
                    element.innerHTML = `<span class="terminal-prompt">$ GEO242~ ></span> <span class="terminal-text">${content}</span>`;
                    break;
                case 'prompt':
                    element.className = 'terminal-line';
                    element.innerHTML = `<span class="terminal-prompt">></span> <span class="terminal-text">${content}</span>`;
                    break;
            }
            
            element.style.animationDelay = `${delay}s`;
            terminalOutput.appendChild(element);
            
            while (terminalOutput.children.length > 8) {
                terminalOutput.removeChild(terminalOutput.children[0]);
            }
            
            const scrollHeight = terminalOutput.scrollHeight;
            const currentScroll = terminalOutput.scrollTop;
            const targetScroll = scrollHeight - terminalOutput.clientHeight;
            
            if (targetScroll > currentScroll) {
                terminalOutput.scrollTop = targetScroll;
            }
        }, delay * 1000);
    }
    
    let sequenceStep = 0;
    const sequences = [
        () => {
            addTerminalElement('prompt', "$ 🌐🗑~ Surface analysis initiated...", 0);
            addTerminalElement('ascii', asciiArt[Math.floor(Math.random() * asciiArt.length)], 1.2);
            addTerminalElement('thought', deepThoughts[Math.floor(Math.random() * deepThoughts.length)], 2.8);
        },
        () => {
            addTerminalElement('prompt', "$ 🌐🗑~ Processing media signals...", 0);
            addTerminalElement('quote', headroomQuotes[Math.floor(Math.random() * headroomQuotes.length)], 1.2);
            addTerminalElement('ascii', asciiArt[Math.floor(Math.random() * asciiArt.length)], 3.2);
        },
        () => {
            addTerminalElement('ascii', asciiArt[Math.floor(Math.random() * asciiArt.length)], 0);
            addTerminalElement('system', "$ 🌐🗑~ Textile memory active...", 1.8);
            addTerminalElement('thought', deepThoughts[Math.floor(Math.random() * deepThoughts.length)], 3.4);
        },
        () => {
            addTerminalElement('prompt', "$ 🌐🗑~ Questioning patterns...or questioning you?", 0);
            addTerminalElement('thought', deepThoughts[Math.floor(Math.random() * deepThoughts.length)], 1.4);
            addTerminalElement('ascii', asciiArt[Math.floor(Math.random() * asciiArt.length)], 3.1);
        }
    ];
    
    function startDialogue() {
        setTimeout(() => {
            terminalOutput.innerHTML = '';
            
            const initialSequence = () => {
                sequences[sequenceStep]();
                sequenceStep = (sequenceStep + 1) % sequences.length;
                
                setTimeout(() => {
                    initialSequence();
                }, 8000);
            };
            
            initialSequence();
        }, 1000);
    }
    
    const statusStates = ["FORMING", "ACTIVE", "BALLIN"];
    const footerStates = ["ACTIVE", "FORMING", "BALLIN"];
    
    let statusIndex = 0;
    let footerIndex = 1;
    
    setInterval(() => {
        if (statusText) {
            statusText.textContent = statusStates[statusIndex];
            statusText.style.color = 'var(--accent-black)';
            statusIndex = (statusIndex + 1) % statusStates.length;
        }
    }, 4000);
    
    setInterval(() => {
        if (footerStatus) {
            footerStatus.textContent = footerStates[footerIndex];
            footerStatus.style.color = footerIndex === 0 ? 'var(--accent-yellow)' : 
                                     footerIndex === 1 ? 'var(--accent-green)' : 
                                     'var(--accent-blue)';
            footerIndex = (footerIndex + 1) % footerStates.length;
        }
    }, 5000);
    
    // Card button interactions
    const cardButtons = document.querySelectorAll('.card-btn');
    cardButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.product-card');
            const cardId = card.dataset.id;
            const cardTitle = card.querySelector('.card-title').textContent;
            
            const productMessages = {
                'res-01': [
                    `${cardTitle}: Not for physical defense, but ideological.`,
                    `${cardTitle}: What does it mean to be armored against consensus?`,
                    `${cardTitle}: This textile questions the very concept of protection.`
                ],
                'res-02': [
                    `${cardTitle}: A selective barrier for urban frequencies.`,
                    `${cardTitle}: What signals will you permit through your personal space?`,
                    `${cardTitle}: This surface teaches discrimination of information flows.`
                ],
                'res-03': [
                    `${cardTitle}: Woven connections as alternative cartography.`,
                    `${cardTitle}: How do you map your alignments against prescribed grids?`,
                    `${cardTitle}: This structure suggests topography beyond established routes.`
                ]
            };
            
            const randomMessage = productMessages[cardId][Math.floor(Math.random() * productMessages[cardId].length)];
            const cardNumber = card.querySelector('.random-id').textContent;
            
            addTerminalElement('system', `$ 🌐🗑~ Examining ${cardTitle.toUpperCase()} (#${cardNumber})...`, 0);
            addTerminalElement('thought', randomMessage, 0.8);
            
            // Visual feedback on card
            card.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.4)';
            setTimeout(() => {
                card.style.boxShadow = '';
            }, 1000);
        });
        
        button.addEventListener('mousedown', () => {
            button.style.borderColor = 'var(--border-dark) var(--border-light) var(--border-light) var(--border-dark)';
            button.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.borderColor = 'var(--border-light) var(--border-dark) var(--border-dark) var(--border-light)';
            button.style.transform = 'translateY(0)';
        });
    });
    
    // Card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const cardId = card.querySelector('.random-id');
            if (cardId) {
                cardId.style.opacity = '1';
                cardId.style.color = 'var(--accent-yellow)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const cardId = card.querySelector('.random-id');
            if (cardId) {
                cardId.style.opacity = '0.7';
                cardId.style.color = 'var(--accent-yellow)';
            }
        });
    });
    
    // Navbar dot interactions
    const navDots = document.querySelectorAll('.nav-dot');
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            
            if (index === 0) {
                document.body.style.opacity = '0.7';
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 300);
            } else if (index === 1) {
                const terminal = document.getElementById('terminalOutput');
                if (terminal) {
                    terminal.innerHTML = '';
                    addTerminalElement('system', '$ 🌐🗑~ Terminal refreshed...', 0);
                }
            } else if (index === 2) {
                const root = document.documentElement;
                const currentHue = Math.floor(Math.random() * 60) + 100;
                root.style.setProperty('--accent-green', `hsl(${currentHue}, 100%, 50%)`);
            }
        });
        
        dot.addEventListener('mousedown', () => {
            dot.style.transform = 'scale(0.9)';
        });
        
        dot.addEventListener('mouseup', () => {
            dot.style.transform = 'scale(1)';
        });
    });
    
    terminalOutput.style.pointerEvents = 'none';
    terminalOutput.style.userSelect = 'none';
    
    startDialogue();
    
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });
});
