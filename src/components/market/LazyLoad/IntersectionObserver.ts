// настройки
const options:IntersectionObserverInit = {
    threshold: 1,
}; 

export const getObserver = (callback: ()=>void): IntersectionObserver => { 
    const observer = 
    new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            callback();
        }
    });
    }, options);
    return observer;
}