// 1. Updated Product Array with stable links
const products = [
    { id: 1, name: 'Pure Whole Milk', price: 120, cat: 'milk', img: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, name: 'Premium Paneer', price: 850, cat: 'milk', img: 'https://images.pexels.com/photos/14416104/pexels-photo-14416104.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, name: 'Creamy Dahi', price: 150, cat: 'milk', img: 'https://images.pexels.com/photos/5946633/pexels-photo-5946633.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, name: 'Kesar Rasmalai', price: 180, cat: 'sweet', img: 'https://images.pexels.com/photos/12044810/pexels-photo-12044810.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, name: 'Gulab Jamun', price: 450, cat: 'sweet', img: 'https://images.pexels.com/photos/12028675/pexels-photo-12028675.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, name: 'Milk Barfi', price: 900, cat: 'sweet', img: 'https://images.pexels.com/photos/10321272/pexels-photo-10321272.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 7, name: 'Sponge Rasgulla', price: 420, cat: 'sweet', img: 'https://images.pexels.com/photos/13010041/pexels-photo-13010041.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 8, name: 'Pure Cow Ghee', price: 1400, cat: 'milk', img: 'https://images.pexels.com/photos/5412431/pexels-photo-5412431.jpeg?auto=compress&cs=tinysrgb&w=400' }
];

// 2. Updated render function with "onerror" safety check
function renderProducts(list) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = list.map(p => `
        <div class="card bg-white dark:bg-slate-800 p-4 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 animate__animated animate__fadeIn">
            <img src="${p.img}" 
                 onerror="this.src='https://placehold.co/400x400/2563eb/white?text=Fresh+Dairy'"
                 class="w-full h-56 object-cover rounded-[2rem] mb-6 bg-slate-200">
            <h4 class="text-xl font-extrabold mb-1">${p.name}</h4>
            <p class="text-slate-400 text-sm mb-4 capitalize">${p.cat}</p>
            <div class="flex justify-between items-center">
                <span class="text-2xl font-black italic">रु ${p.price}</span>
                <button onclick="addToCart(${p.id})" class="bg-slate-900 dark:bg-white dark:text-slate-900 text-white p-3 rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-400 transition">
                    <i data-lucide="plus"></i>
                </button>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}