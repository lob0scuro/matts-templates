import styles from "../styles/TimeSheet.module.css";
import Logo from "../assets/matts-logo.png";

const TimeSheet = () => {
  return (
    <div className={styles.timeSheet}>
      <div className={styles.timeHeader}>
        <div className={styles.plannerHead}>
          <img className={styles.plannerLogo} src={Logo} alt="matts-logo" />
          <h1>Daily Planner</h1>
        </div>
        <div className={styles.infoHead}>
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
            <th className={styles.tasks}>Tasks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>

          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          {/* pagebreak */}
          <tr style={{ pageBreakBefore: "always" }}>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
          <tr>
            <td className={styles.time}></td>
            <td className={styles.tasks}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimeSheet;
