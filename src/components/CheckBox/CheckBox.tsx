import styles from "./styles.module.css"

export default function CheckBox({ id, label }: propsType) {
    return (
        <div className={styles.checkbox}>
            <input 
                className={styles.check__box}
        id={id} 
        type="checkbox" 
      />
      <label className={styles.input__main} htmlFor={id}>{label}</label>
    </div>
    )
}
type propsType = {
    label: String,
  } & React.ComponentProps<"input">