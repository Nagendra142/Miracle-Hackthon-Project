// aiModel.js

// Mock AI model for vehicle diagnosis
export async function diagnoseVehicle(answers) {
    // Extract information from user input
    const {
        stoppingBehavior,
        gearFunctioning,
        engineOilChange,
        fuelLevel
    } = answers;

    // Analyze stopping behavior
    let stoppingIssue = '';
    if (stoppingBehavior.includes('no') ) {
        stoppingIssue = 'Possible braking system problem. Inspect brake pads, rotors, and brake fluid.';
    }

    // Analyze gear functioning
    let gearIssue = '';
    if (gearFunctioning.includes('no') ) {
        gearIssue = 'Possible transmission problem. Check transmission fluid and linkage.';
    }

    // Analyze engine oil change
    let oilIssue = '';
    if (engineOilChange.toLowerCase().includes('no') ) {
        oilIssue = 'Engine oil change overdue. Change engine oil and filter as soon as possible.';
    }

    // Analyze fuel level
    let fuelIssue = '';
    if (fuelLevel.toLowerCase().includes('no') ) {
        fuelIssue = 'Low fuel warning. Refill fuel tank to avoid running out of gas.';
    }

    // Combine all issues
    let diagnosisResult = '';
    if (stoppingIssue || gearIssue || oilIssue || fuelIssue) {
        diagnosisResult = `Vehicle issues detected:\n${stoppingIssue}\n${gearIssue}\n${oilIssue}\n${fuelIssue}`;
    } else {
        diagnosisResult = 'No significant issues detected. Please consult a professional mechanic for further inspection if needed.';
    }

    return diagnosisResult;
}