import React from "react";
// import "./Medications.css";

const Medications = () => {
  return (
    <div className="card">
      <div className="column">
        <div className="title">OTC Medications</div>
        <ul>
          <li>Tylenol 500mg</li>
          <li>Advil 200mg</li>
          <li>Hydrocortisone Cream 1%</li>
          <li>Bacitracin Ointment</li>
          <li>Guaifenesin 400mg (generic for Mucinex)</li>
          <li>Cetirizine 10mg (generic for Zyrtec)</li>
          <li>Loperamide (Generic for Imodium)</li>
          <li>Bismuth subsalicylate (Brand Name Pepto-Bismol)</li>
        </ul>
      </div>

      <div className="column">
        <div className="title">Rx Medications</div>
        <ul>
          <li>Azithromycin (Brand Name Zithromax)</li>
          <li>Amoxicillin-Clavuunate 875 mg-125 mg (Brand Name Augmentin)</li>
          <li>Cephalexin 500mg (Brand Name Keflex)</li>
          <li>Ondansetron 8mg (Brand Name Zofran)</li>
        </ul>
      </div>
    </div>
  );
};

export default Medications;