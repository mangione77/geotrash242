document.addEventListener('DOMContentLoaded', () => {
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
  ║   │●│  BZZT(SCAM)  ║
  ║   └─┘        ║
  ╚══════════════╝`,
        `  [▰▰▰▰▰▰▰▰▰▰]
   LOADING...
  [■■■■■■■■■■]`,
        `  (\\__/) 
  (•ᴥ• ) 
  /  🧵 \\ 
 weNEVERaskedFORthis`,
        `   ╱▔▔▔▔▔▔╲
  ▕   ⚡   ▏
  ▕  / \\  ▏
  ╲▂▂▂▂▂▂╱`,
        `  ┌─────────┐
  │   🔥   │
  │  /|\\|  │
  │   / \\  │
  └─────────┘`,
        `  ╭─○───────╮
  │  /\\_/\\  │
  │ ( ◕ ◕ ) │
  │  >   <  │
  ╰─────────╯`,
        `  .--.      .--.
 (    )----(    )
  '-'      '-' 
    weSTILLdontbelieveyou`,
        `   ╭───────╮
   │  📡  │
   │ ┌───┐│
   ╰─┴───┴╯`,
        `  ╭─────────╮
  │  ⚙️ ⚙️  │
  │   ░░░   │
  │  ⚙️ ⚙️  │
  ╰─────────╯`
    ];
    
    const headroomQuotes = [
        "C-c-catch the wave of the future!",
        "I'm thinking... but nothing's happening!",
        "My brain is like a sponge... a dry sponge.",
        "Television: the box they buried civilization in.",
        "I'd explain it to you, but your brain would explode.",
        "In the future, mistakes will be called 'features'.",
        "Reality is overrated anyway.",
        "I'm not confused, I'm just multi-directional."
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
                    element.innerHTML = `"${content}" <span style="color: var(--accent-green); font-size: 0.7rem;">— Max Headroom</span>`;
                    break;
                case 'thought':
                    element.className = 'thought';
                    element.innerHTML = `⟢ ${content}`;
                    break;
                case 'system':
                    element.className = 'terminal-line';
                    element.innerHTML = `<span class="terminal-prompt">SYSTEM></span> <span class="terminal-text">${content}</span>`;
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
            addTerminalElement('prompt', "Surface analysis initiated...", 0);
            addTerminalElement('ascii', asciiArt[Math.floor(Math.random() * asciiArt.length)], 1.2);
            addTerminalElement('thought', deepThoughts[Math.floor(Math.random() * deepThoughts.length)], 2.8);
        },
        () => {
            addTerminalElement('prompt', "Processing media signals...", 0);
            addTerminalElement('quote', headroomQuotes[Math.floor(Math.random() * headroomQuotes.length)], 1.2);
            addTerminalElement('ascii', asciiArt[Math.floor(Math.random() * asciiArt.length)], 3.2);
        },
        () => {
            addTerminalElement('ascii', asciiArt[Math.floor(Math.random() * asciiArt.length)], 0);
            addTerminalElement('system', "Textile memory active...", 1.8);
            addTerminalElement('thought', deepThoughts[Math.floor(Math.random() * deepThoughts.length)], 3.4);
        },
        () => {
            addTerminalElement('prompt', "Questioning patterns...or questioning you?", 0);
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