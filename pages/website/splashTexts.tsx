import DefaultLayout from "../../components/defaultLayout";
import splashTextList from "../splashTexts.json";

export default function splashTexts() {
  splashTextList.push(
    {
      text:`There is a 1 in ${splashTextList.length+1} chance of seeing this message.`,
      explanation: "This shows the chance of seeing this message among the list of other messages. This is the only dynamic message in the list.",
    }
  );
  return (
    <DefaultLayout title="Splash Texts">
      <h1>Splash Texts</h1>
      <h2>Here are all {splashTextList.length} splash texts used on the home page.</h2>
      <table>
        <thead>
          <tr>
            <th width="30%">Text</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {splashTextList.map((text) => {
            return (
              <tr key={text.text}>
                <td>{text.text}</td>
                <td>{text.explanation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </DefaultLayout>
  );
}