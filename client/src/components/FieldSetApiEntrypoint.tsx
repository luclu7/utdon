/**
 * @author DHENRY for mytinydc.com
 * @license AGPL3
 */

import { useIntl } from "react-intl";
import { useAppDispatch } from "../app/hook";

import "./FieldSetApiEntrypoint.scss";
import { FieldSet } from "./FieldSet";
import { INITIALIZED_TOAST } from "../../../src/Constants";
import { useRef, useState } from "react";
import ButtonGeneric from "./ButtonGeneric";
import { showServiceMessage } from "../app/serviceMessageSlice";
import { CheckBox } from "./CheckBox";

interface FieldSetApiEntrypointProps {
  className?: string;
  apiEntrypoint: string;
  method: string;
  commandTitle: string;
  body?: string;
  userAuthBearer: string;
}
export const FieldSetApiEntrypoint = ({
  className,
  apiEntrypoint,
  method,
  commandTitle,
  body,
  userAuthBearer,
}: FieldSetApiEntrypointProps) => {
  const intl = useIntl();

  const url = `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ""
  }${apiEntrypoint}`;

  const [kParameter, setKParameter] = useState(false);
  const divRef = useRef(null);
  const dispatch = useAppDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const copyToClipboard = () => {
    if (divRef.current) {
      const textToCopy = (divRef.current as HTMLDivElement).innerText;
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      dispatch(
        showServiceMessage({
          ...INITIALIZED_TOAST,
          severity: "info",
          detail: intl.formatMessage({
            id: "The command has been copied to Clipboard",
          }),
        })
      );
    }
  };

  return (
    <FieldSet
      legend={intl.formatMessage({ id: commandTitle })}
      className={`FieldSetApiEntrypoint ${className ? className : ""}`}
    >
      <div className="method">{`Method : ${method}`}</div>
      <div className="url">{`Url : ${url}`}</div>

      <div className="curltitle">
        {intl.formatMessage({ id: "the curl command" })}:
      </div>
      <div className="curlcommand">
        <div className="command" ref={divRef}>
          {`curl -s ${kParameter ? "-k" : ""} ${
            userAuthBearer ? `-H "Authorization: ${userAuthBearer}"` : ""
          } ${body ? `-d "${body}"` : ""} ${url}`}
        </div>
        <ButtonGeneric
          className="copyToClipboard"
          onClick={copyToClipboard}
          icon={"copy"}
          title={intl.formatMessage({ id: "Copy command to the clipboard" })}
        />
      </div>
      {/* // only if https, is certificate self-signed ?? */}
      {window.location.protocol === "https:" ? (
        <CheckBox
          onChange={(event) => {
            // problem with re-renderer
            setKParameter(event.target.checked);
            const newState = event.target.checked;
            setTimeout(() => {
              setIsChecked(newState);
            }, 50);
          }}
          label={intl.formatMessage({
            id: "This secure connection use a self signed certificate",
          })}
          checked={isChecked}
        />
      ) : (
        <div></div>
      )}
    </FieldSet>
  );
};