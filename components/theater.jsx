import styles from  "../styles/Components/theater.module.css";
// import Image from "next/image";

export default function Theater({ media, height, behind_header, noLoop }) {
    height = height || "256px";
    behind_header = !!behind_header;

    if (!media) {
        return null;
    }

    let classnames = [styles.theater];
    if (behind_header) {
        classnames.push(styles.behind_header);
    }

    if (media.endsWith(".mp4") || media.endsWith(".webm")) {
        return (
            <video className={classnames.join(" ")} src={media} height={height} autoPlay loop={!noLoop} muted playsInline />
        );
    } else {
        return (
            <img className={classnames.join(" ")} src={media} height={height} />
        );
    }
}