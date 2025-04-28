import styles from "./TimeSheet.module.css";

const TimeSheet = () => {
  return (
    <div className={styles.timeSheet}>
      <div className={styles.timeHeader}>
        <h1>Daily Planner</h1>
        <div>
          <div>
            <p>Name:</p>
            <div className={styles.headerLine} />
          </div>
          <div>
            <p>Date:</p>
            <div className={styles.headerLine} />
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className={styles.time}>Time</th>
            <th className={styles.focus}>Focus</th>
            <th className={styles.tasks}>Tasks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.focus}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.focus}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.focus}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.focus}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.focus}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.focus}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.focus}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.focus}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.focus}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.focus}></td>
            <td className={styles.tasks}></td>
          </tr>
        </tbody>
      </table>
      <div className={styles.howTo}>
        <div className={styles.howToTime}>
          <p className={styles.howToHeaders}>Time Column:</p>
          <p>
            Fill in each time slot with the amount of time you’ll need to
            complete a task or group of tasks.
          </p>
        </div>
        <div className={styles.howToWashers}>
          <p className={styles.howToHeaders}>Cleaners:</p>
          <p>
            Use the Focus column to list the number and type of machines you’ll
            be dedicating your time to during each block.
          </p>
          <p>
            In the Tasks column, provide a detailed description of your plan for
            achieving the goals outlined in the Focus column.
          </p>
          <p className={styles.example}>
            Example <br />
            <small>
              Focus: "3 large washers"
              <br />
              Tasks: "Deep clean drums, wipe down
            </small>
          </p>
        </div>
        <div className={styles.howToTechs}>
          <p className={styles.howToHeaders}>Repair Technicians:</p>
          <p>
            Use the Focus column to define the category of work you’ll focus on
            during each time block — examples include repairs, service calls,
            floor walks, meetings, or organizing tools and parts.
          </p>
          <p>
            In the Tasks column, describe how you plan to accomplish the focus
            you outlined.
          </p>
          <p className={styles.example}>
            Example <br />
            <small>
              Focus: "Service calls"
              <br />
              Tasks: "Diagnose issue with washer, replace drain pump if
              necessary"
            </small>
          </p>
        </div>
        <div className={styles.howToSales}>
          <p className={styles.howToHeaders}>Sales:</p>
          <p>
            Use the Focus column to note the main type of work you’ll prioritize
            during the time block — examples include customer service, quoting,
            following up with customers, managing inventory, or preparing
            displays.
          </p>
          <p>
            In the Tasks column, describe how you plan to accomplish your goals
            for that block.
          </p>
          <p className={styles.example}>
            Example <br />
            <small>
              Focus: "Customer follow-ups"
              <br />
              Tasks: "Call back pending quotes from last week, send updated
              pricing to customer"
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeSheet;
