document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput = document.getElementById('terminalOutput');
    const statusText = document.getElementById('statusText');
    
    const asciiArt = [
        `  /\\_/\\
 ( o.o )
  > ^ <`,
        `   /\\_/\\
  ( -.- )
  /   \\
 /     \\`,
        `    /\\_/\\
   ( •.• )
  /  >  \\
 /       \\`,
        `  /\\_/\\
 ( =.= )
  /   \\
 (_____)`,
        `    /\\_/\\
   ( @.@ )
  /  \"  \\
 /       \\`
    ];
    
    const headroomQuotes = [
        "Reality is just a collective hunch.",
        "The future isn't what it used to be.",
        "C-c-catch you later!",
        "Anybody who isn't confused here isn't thinking clearly.",
        "Television is the literature of the illiterate.",
        "I never make mistakes. I make predictions which immediately turn out to be wrong.",
        "In the future, everyone will be anonymous for fifteen minutes.",
        "My ratings are so low, I need a submarine to find them."
    ];
    
    const deepThoughts = [
        "What we wear is the first layer of armor against a world that wants us uniform.",
        "Every thread holds memory. Every fabric tells a story of resistance.",
        "The most radical act is to remain visible when they want you to disappear.",
        "Your silhouette against the skyline is a declaration of autonomy.",
        "Textiles that remember are textiles that resist.",
        "The uniform asks for compliance. Critical fashion demands questions.",
        "We don't dress bodies. We armor minds.",
        "A seam is a boundary. A stitch is a decision.",
        "What patterns have you accepted without examination?",
        "The surface speaks. Are you listening?"
    ];
    
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
                    element.innerHTML = `"${content}" <span style="color: var(--accent-red-light); font-size: 0.7rem;">— Max Headroom</span>`;
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
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            
            if (terminalOutput.children.length > 12) {
                terminalOutput.removeChild(terminalOutput.children[0]);
            }
        }, delay * 1000);
    }
    
    let sequenceStep = 0;
    const sequences = [
        () => {
            addTerminalElement('prompt', "Surface analysis initiated...", 0);
            addTerminalElement('thought', deepThoughts[Math.floor(Math.random() * deepThoughts.length)], 1.2);
            addTerminalElement('ascii', asciiArt[Math.floor(Math.random() * asciiArt.length)], 2.5);
        },
        () => {
            addTerminalElement('prompt', "Processing media signals...", 0);
            addTerminalElement('quote', headroomQuotes[Math.floor(Math.random() * headroomQuotes.length)], 1.2);
            addTerminalElement('thought', deepThoughts[Math.floor(Math.random() * deepThoughts.length)], 3);
        },
        () => {
            addTerminalElement('ascii', asciiArt[Math.floor(Math.random() * asciiArt.length)], 0);
            addTerminalElement('system', "Textile memory active...", 1.5);
            addTerminalElement('thought', deepThoughts[Math.floor(Math.random() * deepThoughts.length)], 2.8);
        },
        () => {
            addTerminalElement('prompt', "Questioning patterns...", 0);
            addTerminalElement('thought', deepThoughts[Math.floor(Math.random() * deepThoughts.length)], 1.2);
            addTerminalElement('quote', headroomQuotes[Math.floor(Math.random() * headroomQuotes.length)], 3);
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
                }, 7000);
            };
            
            initialSequence();
        }, 1000);
    }
    
    const statusStates = [
        "QUESTIONING",
        "RESISTING",
        "THINKING",
        "WEAVING",
        "RECONSIDERING",
        "REIMAGINING"
    ];
    
    let statusIndex = 0;
    setInterval(() => {
        if (statusText) {
            statusText.textContent = statusStates[statusIndex];
            statusText.style.color = statusIndex % 2 === 0 ? 'var(--accent-gold)' : 'var(--accent-white)';
            statusText.style.textShadow = '0 0 8px currentColor';
            setTimeout(() => {
                statusText.style.textShadow = 'none';
            }, 500);
            statusIndex = (statusIndex + 1) % statusStates.length;
        }
    }, 3500);
    
    const buttons = document.querySelectorAll('.button-98, .footer-link');
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.borderColor = 'var(--border-dark) var(--border-light) var(--border-light) var(--border-dark)';
            button.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.borderColor = 'var(--border-light) var(--border-dark) var(--border-dark) var(--border-light)';
            button.style.transform = 'translateY(0)';
        });
    });
    
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('mousedown', () => {
            item.style.borderColor = 'var(--border-dark) var(--accent-gold) var(--accent-gold) var(--border-dark)';
            item.style.transform = 'translateY(2px)';
        });
        
        item.addEventListener('mouseup', () => {
            item.style.borderColor = 'var(--accent-gold) var(--border-dark) var(--border-dark) var(--accent-gold)';
            item.style.transform = 'translateY(-2px)';
        });
    });
    
    const examineButtons = document.querySelectorAll('.examine-btn');
    examineButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = button.closest('.product-item').dataset.id;
            const productMessages = {
                'res-01': [
                    "ARMOR: Not for physical defense, but ideological.",
                    "What does it mean to be armored against consensus?",
                    "This textile questions the very concept of protection."
                ],
                'res-02': [
                    "MEMBRANE: A selective barrier for urban frequencies.",
                    "What signals will you permit through your personal space?",
                    "This surface teaches discrimination of information flows."
                ],
                'res-03': [
                    "NETWORK: Woven connections as alternative cartography.",
                    "How do you map your alignments against prescribed grids?",
                    "This structure suggests topography beyond established routes."
                ]
            };
            
            const randomMessage = productMessages[productId][Math.floor(Math.random() * productMessages[productId].length)];
            addTerminalElement('system', `Examining ${productId.toUpperCase()}...`, 0);
            addTerminalElement('thought', randomMessage, 0.8);
        });
    });
    
    terminalOutput.addEventListener('click', () => {
        addTerminalElement('system', "Interface engaged...", 0);
        addTerminalElement('thought', deepThoughts[Math.floor(Math.random() * deepThoughts.length)], 0.8);
    });
    
    startDialogue();
    
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });
});
