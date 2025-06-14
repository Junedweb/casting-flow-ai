
interface ButtonClickData {
  buttonName: string;
  timestamp: string;
  page: string;
  userAgent: string;
}

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/23376283/uy7xs18/";

export const trackButtonClick = async (buttonName: string) => {
  const timestamp = new Date().toISOString();
  const clickData: ButtonClickData = {
    buttonName,
    timestamp,
    page: window.location.pathname,
    userAgent: navigator.userAgent
  };

  console.log("Button clicked:", clickData);

  // Save to local storage as backup
  const buttonClicks = JSON.parse(localStorage.getItem('buttonClicks') || '[]');
  buttonClicks.push(clickData);
  localStorage.setItem('buttonClicks', JSON.stringify(buttonClicks));

  // Send to Zapier webhook
  try {
    await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify({
        ...clickData,
        submitted: `${timestamp} - ${buttonName}`,
        source: "JAMZ Button Tracking"
      }),
    });
  } catch (error) {
    console.error("Error sending button click to Zapier:", error);
  }
};
