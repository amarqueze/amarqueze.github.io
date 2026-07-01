import React from "react";
import ProjectLayout from "../../components/ProjectLayout.jsx";

const AsientaProject = () => {
  return (
    <ProjectLayout
      tag="In-Progress"
      title="Asienta"
      description="A configurable accounting platform that turns business operations into automated accounting processes through an event-driven engine and configurable accounting templates."
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80"
      githubUrl=""
      liveUrl=""
    >
      <h2>Overview</h2>
      <p>
        Asienta is designed for accountants, entrepreneurs, and small and
        medium-sized businesses that need a more flexible way to manage
        accounting workflows. Instead of manually creating journal entries,
        users register business operations such as purchases, sales, payments,
        and collections.
      </p>
      <p>
        The platform then generates accounting vouchers and accounting entries
        automatically, with a foundation that can later support fiscal
        documents, financial reports, AI agents, and banking integrations.
      </p>

      <h2>Problem</h2>
      <p>
        Traditional accounting systems are often organized around accounting
        concepts instead of business operations. That makes them rigid,
        difficult to adapt to each company&apos;s workflow, and dependent on
        repetitive manual classification.
      </p>
      <p>
        Those manual steps create extra work, increase the risk of
        classification errors, and force accountants to spend time correcting
        transactions instead of improving the business process itself.
      </p>

      <h2>Solution</h2>
      <p>
        Asienta provides a configurable accounting engine where accountants
        define reusable accounting rules through templates and workflows. Users
        capture the business event, while the platform transforms that event
        into consistent accounting information.
      </p>

      <h2>Processing Flow</h2>
      <ol>
        <li>Business operation</li>
        <li>Event</li>
        <li>Accounting template</li>
        <li>Accounting voucher</li>
        <li>Accounting entries</li>
        <li>Reports and calculated objects</li>
      </ol>

      <h2>MVP Highlights</h2>
      <ul>
        <li>Configurable accounting templates for automatic voucher creation</li>
        <li>Dynamic business forms that can be configured without development</li>
        <li>Event-driven architecture for processing registered operations</li>
        <li>
          Master data management for companies, third parties, chart of
          accounts, taxes, products, and accounting periods
        </li>
        <li>Automatic creation of balanced accounting vouchers and entries</li>
        <li>Independent configuration for multiple companies</li>
      </ul>

      <h2>Accounting Reports</h2>
      <ul>
        <li>General Journal</li>
        <li>General Ledger</li>
        <li>Trial Balance</li>
        <li>Cash Flow</li>
        <li>Account Balances</li>
        <li>User-defined Cash and Bank Balances</li>
      </ul>
    </ProjectLayout>
  );
};

export default AsientaProject;
