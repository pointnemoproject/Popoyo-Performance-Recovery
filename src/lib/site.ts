export const siteConfig = { name: "Popoyo Performance & Recovery", url: "https://popoyorecovery.com", description: "Personalized sports massage, mobility, strength training, and recovery-focused bodywork for surfers, active travelers, and residents in Popoyo.", whatsappDisplay: "+505 8617 1764", whatsappNumber: "50586171764" };
export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi Popoyo Performance & Recovery, I would like to book a session.")}`;
export const navItems = [{label:"Home",href:"/"},{label:"Services",href:"/#services"},{label:"Approach",href:"/#approach"},{label:"Pricing",href:"/pricing"},{label:"Book",href:"/book"}];
export const services = [
{title:"Surf Recovery",href:"/surf-recovery",image:"/images/surf-running.jpg",copy:"Recovery work for shoulders, neck, low back, hips, paddling fatigue, soreness, mobility, and getting back in the water."},
{title:"Sports Massage & Bodywork",href:"/sports-massage",image:"/images/sports-massage.jpg",copy:"Therapeutic bodywork for tight muscles, chronic tension, deep tissue recovery, and assisted stretching."},
{title:"Personal Training",href:"/personal-training",image:"/images/personal-training.jpg",copy:"One-on-one strength, balance, mobility, conditioning, surf performance, and general fitness."},
{title:"Mobility & Movement",href:"/mobility-movement",image:"/images/stretch-mobility.jpg",copy:"Flexibility, stability, posture, body control, stiffness, and confidence moving."},
{title:"Physical Therapy-Inspired Recovery",href:"/physical-therapy-inspired-recovery",image:"/images/coastal-recovery.jpg",copy:"Movement-based recovery, mobility, strength, balance, pain reduction, and return to activity."}
];
export const jsonLd = {"@context":"https://schema.org","@type":"HealthAndBeautyBusiness",name:siteConfig.name,url:siteConfig.url,telephone:siteConfig.whatsappDisplay,priceRange:"Contact for pricing",address:{"@type":"PostalAddress",addressLocality:"Popoyo",addressCountry:"NI"}};
