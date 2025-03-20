import getData from './lib/service.js';

(async () => {
    try {
        const userId = 1;
        const result = await getData(userId);
        console.log('Birleştirilmiş Veri:', result);
    } catch (error) {
        console.error('Hata:', error);
    }
})();