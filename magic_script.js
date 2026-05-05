//hamburger menu
    function toggleSidebar() {
        const sidebar = document.getElementById('mainSidebar');
        const overlay = document.getElementById('sidebarOverlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    }
    // Fungsi untuk menutup sidebar saat menu diklik (terutama penting di mobile)
    function closeSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if(sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    }
    //product
    const allProducts = [
        { id: 1, name: 'dO0dlEs rUsh!', cat: 'layout', desc: 'look at that! cute little doodles!', img: 'layout2.png', price: 15000 },
        { id: 2, name: 'STaR eYeS', cat: 'keychain', desc: 'glitter finished keychain!', img: 'keychain3.png', price: 25000 },
        { id: 3, name: 'Mystic Force', cat: 'stickers', desc: 'magnetic glitter paper!', img: 'stc1.jpg', price: 10000 },
        { id: 4, name: 'What About?', cat: 'pins', desc: 'glossy finished pin!', img: 'pin3.jpeg', price: 12000 },
        { id: 5, name: 'catch of loves', cat: 'bundles', desc: 'juicy red starter pack!', img: 'bundle8.jpeg', price: 45000 },
        { id: 6, name: 'Love Pocket Bundle', cat: 'bundles', desc: 'keychain, pin, and sticker!', img: 'stc3.jpeg', price: 45000 },
        { id: 7, name: 'BReaK d SCeNe!', cat: 'layout', desc: 'break the ruler! we are skena!', img: 'layout3.png', price: 15000 },
        { id: 8, name: 'Blushed in Blue', cat: 'bundles', desc: 'full pack blue theme!', img: 'bundle1.jpeg', price: 45000 },
        { id: 9, name: 'page of happiness', cat: 'keychain', desc: 'glitter finished!', img: 'keychain1.jpeg', price: 25000 },
        { id: 10, name: 'Love, Tomato, and You!', cat: 'bundles', desc: 'juicy red starter pack!', img: 'bundle2.jpeg', price: 45000 },
        { id: 11, name: 'My Rock STAR', cat: 'keychain', desc: 'glitter finished!', img: 'keychain4.jpeg', price: 25000 },
        { id: 12, name: 'aquarium', cat: 'layout', desc: 'cherish every moment!', img: 'layout6.jpeg', price: 15000 },
        { id: 13, name: 'Your Star Angle!', cat: 'keychain', desc: 'glitter finished!', img: 'keychain5.jpeg', price: 25000 },
        { id: 14, name: 'Red of my LOVER', cat: 'pins', desc: 'glossy finished pin!', img: 'pin4.jpeg', price: 12000 },
        { id: 15, name: 'Angle Bunny HOON!', cat: 'bundles', desc: 'juicy red starter pack!', img: 'bundle4.jpeg', price: 45000 },
        { id: 16, name: 'CLOVER WISH', cat: 'pins', desc: 'glossy finished pin!', img: 'pin6.jpeg', price: 12000 },
        { id: 17, name: 'dream sheetS', cat: 'stickers', desc: 'shining magnetic paper!', img: 'stc8.jpeg', price: 10000 },
        { id: 18, name: '100% love you', cat: 'pins', desc: 'glossy finished pin!', img: 'pin2.jpeg', price: 12000 },
        { id: 19, name: 'fraigle!!!', cat: 'keychain', desc: 'glitter finished!', img: 'keychain7.jpeg', price: 25000 },
        { id: 20, name: 'LOVERS CLUB card', cat: 'keychain', desc: 'special member edition!', img: 'keychain6.jpeg', price: 28000 },
        { id: 21, name: 'weekly plan', cat: 'layout', desc: 'cherish every moment!', img: 'layout7.jpeg', price: 15000 },
        { id: 22, name: 'd SWEETiest tOOth ik', cat: 'stickers', desc: 'shining magnetic paper!', img: 'stc4.jpeg', price: 10000 },
        { id: 23, name: 'apples you', cat: 'layout', desc: 'cherish every moment!', img: 'layout5.jpeg', price: 15000 },
        { id: 24, name: 'summer sesion', cat: 'bundles', desc: 'juicy red starter pack!', img: 'bundle5.jpeg', price: 45000 },
        { id: 25, name: 'hand mirror', cat: 'pins', desc: 'glossy finished pin!', img: 'pin7.jpeg', price: 12000 },
        { id: 26, name: 'my green apples', cat: 'pins', desc: 'glossy finished pin!', img: 'pin1.jpeg', price: 12000 },
        { id: 27, name: 'STARRY CRUSH', cat: 'keychain', desc: 'glitter finished!', img: 'keychain2.jpeg', price: 25000 },
        { id: 28, name: 'Love Pocket Sticker!', cat: 'stickers', desc: 'shining magnetic paper!', img: 'stc3.jpeg', price: 10000 },
        { id: 29, name: 'the key of my heart', cat: 'keychain', desc: 'glitter finished!', img: 'keychain8.jpeg', price: 25000 },
        { id: 30, name: 'handle with love', cat: 'pins', desc: 'glossy finished pin!', img: 'pin8.jpeg', price: 12000 },
        { id: 31, name: 'game boy', cat: 'layout', desc: 'cherish every moment!', img: 'layout4.jpeg', price: 15000 },
        { id: 32, name: 'in every frUIt you love', cat: 'stickers', desc: 'shining magnetic paper!', img: 'stc5.jpeg', price: 10000 },
        { id: 33, name: 'at your NEXT DOOR', cat: 'pins', desc: 'glossy finished pin!', img: 'pin5.jpeg', price: 12000 },
        { id: 34, name: 'my FLUFFiest', cat: 'stickers', desc: 'shining magnetic paper!', img: 'stc6.jpeg', price: 10000 },
        { id: 35, name: 'inyou', cat: 'bundles', desc: 'juicy red starter pack!', img: 'bundle6.jpeg', price: 45000 },
        { id: 36, name: 'our journal story', cat: 'layout', desc: 'cherish every moment!', img: 'layout8.jpeg', price: 15000 },
        { id: 37, name: 'my Folder?', cat: 'stickers', desc: 'shining magnetic paper!', img: 'stc2.jpeg', price: 10000 },
        { id: 38, name: 'more than just a- dream?', cat: 'stickers', desc: 'shining magnetic paper!', img: 'stc7.jpeg', price: 10000 },
        { id: 39, name: 'baked by the sun', cat: 'bundles', desc: 'juicy red starter pack!', img: 'bundle7.jpeg', price: 45000 }
    ];

    let magicBag = [];
    //
    function openTab(tabId) {
        document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
        const targetPage = document.getElementById(tabId);
        if(targetPage) targetPage.classList.add('active');
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const activeButton = document.getElementById('btn-' + tabId);
        if(activeButton) activeButton.classList.add('active');
        if(tabId === 'order-page') renderBag();
        const receiptArea = document.getElementById('receipt-area');
        if(receiptArea) receiptArea.style.display = 'none';
        closeSidebar();
        
        window.scrollTo(0,0);
    }

    function filterCategory(cat, btn) {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        if(btn) btn.classList.add('active');
        renderProducts(cat);
    }
    function renderProducts(category = 'all') {
        const grid = document.getElementById('product-grid-main');
        if(!grid) return;
        grid.innerHTML = '';   
        const filtered = category === 'all' ? allProducts : allProducts.filter(p => p.cat === category);
        filtered.forEach(p => {
            grid.innerHTML += `
                <div class="prod-card">
                    <div class="img-wrap">
                        <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/150?text=StarCallers'">
                    </div>
                    <p class="prod-name">${p.name}</p>
                    <p class="prod-price">Rp ${p.price.toLocaleString()}</p>
                    <p class="prod-desc">${p.desc}</p>
                    <button class="add-bag-btn" onclick="addToBag(${p.id})">add to bag +</button>
                </div>
            `;
        });
    }
    function addToBag(productId) {
        const product = allProducts.find(p => p.id === productId);
        if(product) {
            magicBag.push({...product, tempId: Date.now() + Math.random()});
            updateBadge();
            showToast(product.name + " added! ^ᴗ.ᴗ^︎ Ⳋ");
        }
    }
    function updateBadge() {
        const badge = document.getElementById('bag-count');
        if(badge) badge.innerText = magicBag.length;
    }
    function showToast(message) {
        const container = document.getElementById('toast-container');
        if(!container) return;
        const toast = document.createElement('div');
        toast.className = 'custom-toast';
        toast.innerHTML = `<i class="fas fa-magic"></i> ${message}`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.5s ease forwards';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }
    function renderBag() {
        const emptyState = document.getElementById('empty-state');
        const formContainer = document.getElementById('order-form-container');
        const listDiv = document.getElementById('cart-display-list');
        if(!listDiv) return;
        listDiv.innerHTML = '';
        if(magicBag.length === 0) {
            if(emptyState) emptyState.style.display = 'block';
            if(formContainer) formContainer.style.display = 'none';
        } else {
            if(emptyState) emptyState.style.display = 'none';
            if(formContainer) formContainer.style.display = 'block';
            magicBag.forEach((item, index) => {
                listDiv.innerHTML += `
                    <div class="cart-display-item">
                        <span>${item.name} (Rp ${item.price.toLocaleString()})</span>
                        <i class="fas fa-times remove-btn" onclick="removeItem(${index})"></i>
                    </div>
                `;
            });
        }
    }
    //hapus item di order
    function removeItem(index) {
        magicBag.splice(index, 1);
        updateBadge();
        renderBag();
    }
    function clearCart() {
        if(confirm("Empty your bag?")) {
            magicBag = [];
            updateBadge();
            renderBag();
        }
    }
    //receipt
    function generateReceipt() {
        const name = document.getElementById('custName').value.trim();
        const phone = document.getElementById('custPhone').value.trim();
        const addr = document.getElementById('custAddr').value.trim();
        const pay = document.getElementById('payMethod').value;
        const deliveryEl = document.getElementById('deliveryMethod');
        const shipCost = parseInt(deliveryEl.value) || 0;
        const shipName = deliveryEl.options[deliveryEl.selectedIndex].text;
        if(!name || !phone || !addr || deliveryEl.value === "") {
            return showToast("Please fill all details and shipping! ૮₍ ˃ ⤙ ˂ ₎ა");
        }
        let subtotal = magicBag.reduce((sum, item) => sum + item.price, 0);
        let total = subtotal + shipCost;
        document.getElementById('order-form-container').style.display = 'none';
        document.getElementById('receipt-area').style.display = 'block';
        const now = new Date();
        const formattedDate = now.toLocaleDateString('id-ID') + " " + now.toLocaleTimeString('id-ID');
        let itemsHtml = magicBag.map(item => `
            <div class="receipt-row">
                <span>${item.name}</span> 
                <span>Rp ${item.price.toLocaleString()}</span>
            </div>
        `).join('');
        document.getElementById('receipt-details').innerHTML = `
            <div class="receipt-row"><span>Date:</span> <span>${formattedDate}</span></div>
            <div class="receipt-row"><span>Name:</span> <span>${name}</span></div>
            <div class="receipt-row"><span>Phone:</span> <span>${phone}</span></div>
            <div class="receipt-row"><span>Address:</span> <span>${addr}</span></div>
            <div style="border-top: 1px dashed #7b5d50; margin:10px 0; padding-top:10px;">
                <b style="font-size:11px; color:#7b5d50;">ORDER LIST:</b><br>${itemsHtml}
            </div>
            <div class="receipt-row"><span>Subtotal:</span> <span>Rp ${subtotal.toLocaleString()}</span></div>
            <div class="receipt-row"><span>Shipping (${shipName}):</span> <span>Rp ${shipCost.toLocaleString()}</span></div>
            <div class="receipt-row" style="border-top:2px solid #7b5d50; padding-top:5px; font-size:18px; color:#ff7bac; font-weight:bold;">
                <span>TOTAL:</span> <span>Rp ${total.toLocaleString()}</span>
            </div>
            <div class="receipt-row"><span>Payment:</span> <span>${pay.toUpperCase()}</span></div>
        `;
        let payBox = document.getElementById('payment-instruction');
        if(pay === 'qris') {
            payBox.innerHTML = `Scan to pay Rp ${total.toLocaleString()}:<br>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=STARCALLERS_PAY_${total}" class="qris-img">`;
        } else {
            payBox.innerHTML = `Transfer Rp ${total.toLocaleString()} to ${pay.toUpperCase()}:<br>
            <b style="font-size:16px; color:#ff7bac;">0813-7401-6876</b><br>a.n StarCallers Admin`;
        }
    }
    function downloadReceipt() {
        const receiptElement = document.getElementById('printable-receipt');
        const customerName = document.getElementById('custName').value || 'Customer';
        if(typeof html2canvas === 'undefined') {
            return alert("Error: html2canvas library is not loaded!");
        }
        html2canvas(receiptElement, {
            scale: 2, 
            backgroundColor: "#ffffff",
            useCORS: true 
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `StarCallers-Receipt-${customerName}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
            showToast("Receipt saved! Please pay & confirm. 𐔌՞꜆. ̫.꜀՞𐦯");
        });
    }
    window.onload = function() {
        renderProducts('all');
        
        // Listener tambahan untuk menutup sidebar jika overlay di-klik
        const overlay = document.querySelector('.sidebar-overlay');
        if(overlay) {
            overlay.addEventListener('click', closeSidebar);
        }
    };