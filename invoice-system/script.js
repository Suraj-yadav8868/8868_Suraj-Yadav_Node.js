
let items = [];

// Load saved data on page load
document.addEventListener('DOMContentLoaded', function() {
    loadFromStorage();
});

function addItem() {
    let name = document.getElementById('itemName').value.trim();
    let qty = parseInt(document.getElementById('qty').value);
    let qtyUnit = document.getElementById('qtyUnit').value;
    let price = parseFloat(document.getElementById('price').value);
    let disc = parseFloat(document.getElementById('discount').value) || 0;

    // Validation - no negative numbers, required fields
    if (!name) { alert('Please enter item name!'); return; }
    if (!qty || qty <= 0) { alert('Quantity must be at least 1!'); return; }
    if (!price || price <= 0) { alert('Price must be greater than 0!'); return; }
    if (disc < 0 || disc > 100) { alert('Discount must be between 0 and 100!'); return; }

    // Calculate total: (Quantity × Price) - Discount
    let itemTotal = qty * price;
    let discountAmount = itemTotal * (disc / 100);
    let total = itemTotal - discountAmount;

    items.push({ name, qty, qtyUnit, price, disc, total, discountAmount });
    clearInputs();
    renderTable();
    saveToStorage();
}

function clearInputs() {
    document.getElementById('itemName').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('price').value = '';
    document.getElementById('discount').value = '0';
    document.getElementById('qtyUnit').value = 'nos';
}

function renderTable() {
    let tbody = document.getElementById('tableBody');
    if (items.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center">No items added</td></tr>';
    } else {
        tbody.innerHTML = items.map((item, i) => `
            <tr>
                <td>${item.name}</td>
                <td>${item.qty} ${item.qtyUnit}</td>
                <td>Rs ${item.price.toFixed(2)}</td>
                <td>${item.disc}%</td>
                <td>Rs ${item.total.toFixed(2)}</td>
                <td><button class="delete-btn" onclick="deleteItem(${i})">X</button></td>
            </tr>
        `).join('');
    }
    calculateTotals();
}

function deleteItem(index) {
    items.splice(index, 1);
    renderTable();
    saveToStorage();
}

function calculateTotals() {
    let subtotal = items.reduce((s, i) => s + (i.qty * i.price), 0);
    let totalDiscount = items.reduce((s, i) => s + i.discountAmount, 0);
    let afterDisc = subtotal - totalDiscount;
    let taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
    let tax = afterDisc * (taxRate / 100);
    let grand = afterDisc + tax;

    document.getElementById('subtotal').textContent = 'Rs ' + subtotal.toFixed(2);
    document.getElementById('discountTotal').textContent = '-Rs ' + totalDiscount.toFixed(2);
    document.getElementById('taxTotal').textContent = 'Rs ' + tax.toFixed(2);
    document.getElementById('grandTotal').textContent = 'Rs ' + grand.toFixed(2);
}

function resetInvoice() {
    if (items.length > 0 && !confirm('Clear all items?')) return;
    items = [];
    clearInputs();
    document.getElementById('taxRate').value = '10';
    renderTable();
    localStorage.removeItem('invoiceItems');
    localStorage.removeItem('taxRate');
}

function printInvoice() {
    if (items.length === 0) { alert('No items to print!'); return; }
    window.print();
}

function downloadPDF() {
    if (items.length === 0) { alert('No items to save!'); return; }
    let content = document.body.cloneNode(true);
    content.querySelector('.form-section').remove();
    content.querySelectorAll('button').forEach(b => b.remove());
    let opt = { margin: 10, filename: 'invoice.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } };
    html2pdf().set(opt).from(content).save();
}

// Save to localStorage
function saveToStorage() {
    localStorage.setItem('invoiceItems', JSON.stringify(items));
    localStorage.setItem('taxRate', document.getElementById('taxRate').value);
}

// Load from localStorage
function loadFromStorage() {
    let savedItems = localStorage.getItem('invoiceItems');
    let savedTaxRate = localStorage.getItem('taxRate');
    
    if (savedItems) {
        items = JSON.parse(savedItems);
        renderTable();
    }
    
    if (savedTaxRate) {
        document.getElementById('taxRate').value = savedTaxRate;
    }
}

// Tax rate change listener
document.getElementById('taxRate').addEventListener('input', function() {
    calculateTotals();
    saveToStorage();
});

