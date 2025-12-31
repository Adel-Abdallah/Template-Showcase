import { templates } from "../shared/data/templates";
import TemplateCard from "./TemplateCard";
import styles from "./TemplatesGrid.module.css";

export default function TemplatesGrid() {
    return (
        <div className={styles.grid}>
            {templates.map((t) => (
                <TemplateCard key={t.id} template={t} />
            ))}
        </div>
    );
}
