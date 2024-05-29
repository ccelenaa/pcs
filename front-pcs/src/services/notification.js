export default {
    notifier: (type, message) => {
        const toastBox = document.getElementById('toastBox');
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.classList.add('type');
        toast.innerHTML = message;
        toastBox.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 5000);
    },
}
