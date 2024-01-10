/**
 * @author DHENRY for mytinydc.com
 * @license AGPL3
 */

import { useIntl } from "react-intl";
import { useAppDispatch } from "../../app/hook";
import { useNavigate } from "react-router-dom";

import "./UserManager.scss";
import InputGeneric from "../../components/InputGeneric";
import { useEffect, useState } from "react";
import {
    INITIALIZED_NEWUSER,
    INITIALIZED_TOAST,
} from "../../../../src/Constants";
import { ErrorServer, NewUserType } from "../../../../src/Global.types";
import { FieldSet } from "../../components/FieldSet";
import ButtonGeneric from "../../components/ButtonGeneric";
import { Block } from "../../components/Block";
import { mytinydcUPDONApi } from "../../api/mytinydcUPDONApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { showServiceMessage } from "../../app/serviceMessageSlice";

interface UserManagerProps {
    onHide: () => void;
}

export const UserManager = ({onHide}: UserManagerProps) => {
    const intl = useIntl();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<NewUserType>(
        INITIALIZED_NEWUSER
    );

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // const [isDialogVisible, setIsDialogVisible] = useState(false);

    /**
     * Used for server errors (api entrypoint call)
     * @param error
     * @returns
     */
    const dispatchServerError = (error: FetchBaseQueryError) => {
        if (error) {
            const servererror = error.data as ErrorServer;
            if (servererror.error) {
                dispatch(
                    showServiceMessage({
                        ...INITIALIZED_TOAST,
                        severity: "error",
                        sticky: true,
                        detail: intl.formatMessage({id: servererror.error}),
                    })
                );
            }
            if (error.status === 401) return navigate("/login");
        }
    };

    const handleOnPost = async () => {
        console.log(formData);
        // if (
        //   formData.password &&
        //   formData.newPassword &&
        //   formData.newConfirmPassword &&
        //   formData.newPassword === formData.newConfirmPassword
        // ) {
        // dispatch(mytinydcUPDONApi.endpoints.putChangePassword.initiate({
        //     ...formData,
        //     login
        //   }))
        //     .unwrap()
        //     .then(() => {
        //       onHide();
        //       dispatch(
        //         showServiceMessage({
        //           ...INITIALIZED_TOAST,
        //           severity: "info",
        //           sticky: true,
        //           detail: intl.formatMessage({
        //             id: "Your password has been changed",
        //           }),
        //         })
        //       );
        //     })
        //     .catch((error) => {
        //       dispatchServerError(error);
        //     });
        // }
    };
    const handleOnChange = (key: string, value: string) => {
        setFormData({...formData, [key]: value});
    };

    const [users, setUsers] = useState([] as string[]);

    useEffect(() => {
        dispatch(mytinydcUPDONApi.endpoints.getUsers.initiate(null))
            .unwrap()
            .then((response) => {
                setUsers(response);
            })
            .catch((error) => {
                dispatchServerError(error);
            });
    }, []);

    useEffect(() => {
        if (
            formData.password &&
            formData.login
        ) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [formData]);

    return (
        <div className="UserManager">
            <table>
                <thead>
                <tr>
                    <th>{intl.formatMessage({id: "Login"})}</th>
                    <th>{intl.formatMessage({id: "Actions"})}</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => {
                    return (
                        <tr key={user}>
                            <td>{user}</td>
                            <td>
                                <ButtonGeneric onClick={(e) => console.log(e)}
                                               label={intl.formatMessage({id: "Delete"})} icon={"trash"}/>
                                <ButtonGeneric onClick={(e) => console.log(e)} label={intl.formatMessage({id: "Edit"})}
                                               icon={"edit"}/>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <h2 className={"new-user-label"}>{intl.formatMessage({id: "Add a new user"})}</h2>
            <Block>
                <FieldSet
                    legend={intl.formatMessage({id: "Username"})}
                    className="expression"
                >
                    <InputGeneric
                        value={formData.login}
                        onChange={(value) => handleOnChange("login", value)}
                    />
                </FieldSet>
                <FieldSet
                    legend={intl.formatMessage({id: "Password"})}
                    className="password"
                >
                    <InputGeneric
                        value={formData.password}
                        type={"password"}
                        onChange={(value) => handleOnChange("password", value)}
                    />
                </FieldSet>
                <FieldSet legend={intl.formatMessage({id: "Submit"})} className={"submit-button"}>
                    <ButtonGeneric
                        className="success submit-button"
                        onClick={handleOnPost}
                        // icon={"device-floppy"}
                        label={intl.formatMessage({id: "Submit"})}
                        disabled={isButtonDisabled}
                    />
                </FieldSet>
            </Block>

        </div>

        // <Block className={`ChangePassword`}>
        //   <FieldSet legend={intl.formatMessage({ id: "Username" })}>
        //     <InputGeneric
        //       value={formData.password}
        //       onChange={(value: string) => handleOnChange("password", value)}
        //       autoComplete="new-password"
        //       type="password"
        //     />
        //   </FieldSet>
        //   <FieldSet legend={intl.formatMessage({ id: "Your new password" })}>
        //     <InputGeneric
        //       value={formData.newPassword}
        //       onChange={(value: string) => handleOnChange("newPassword", value)}
        //       type="password"
        //       autoComplete="new-password"
        //     />
        //   </FieldSet>
        //   <FieldSet
        //     legend={intl.formatMessage({ id: "Confirm your current password" })}
        //   >
        //     <InputGeneric
        //       value={formData.newConfirmPassword}
        //       onChange={(value: string) =>
        //         handleOnChange("newConfirmPassword", value)
        //       }
        //       type="password"
        //       autoComplete="new-password"
        //       onKeyUp={(key: string) => {
        //         if (key === "Enter") handleOnPost();
        //       }}
        //     />
        //   </FieldSet>
        //   <div className="groupButtons">
        //     <ButtonGeneric
        //       label={intl.formatMessage({ id: "Save" })}
        //       onClick={handleOnPost}
        //       disabled={isButtonDisabled}
        //       className={isButtonDisabled ? "disabled" : ""}
        //       title={
        //         isButtonDisabled
        //           ? intl.formatMessage({
        //               id: "Disabled because form not filled in",
        //             })
        //           : ""
        //       }
        //     />
        //   </div>
        // </Block>
    );
};
