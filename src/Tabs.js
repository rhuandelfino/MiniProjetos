import React, { useState } from 'react';


function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Tab 1', content: 'Conteúdo da Tab 1' },
    { id: 1, label: 'Tab 2', content: 'Conteúdo da Tab 2' },
    { id: 2, label: 'Tab 3', content: 'Conteúdo da Tab 3' },
  ];

  return (
    <div>
      <div className="tab-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && <p key={tab.id}>{tab.content}</p>
        )}
      </div>
    </div>
  );
}

export default Tabs;
