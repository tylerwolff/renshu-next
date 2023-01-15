import styles from './ProgressBar.module.css';

type ProgressBarProps = {
  progress: number;
};

function ProgressBar(props: ProgressBarProps) {
  return (
    <div
      className={styles.progressBar}
      style={{ width: props.progress + '%' }}
    />
  );
}

export default ProgressBar;
