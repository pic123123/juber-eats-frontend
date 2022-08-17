import { ApolloError, gql, useMutation } from '@apollo/client';
import Button from 'components/button';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

import { REGEX_EMAIL, REGEX_PASSWORD } from '../common/common.constatns';
import { FormErorr } from '../components/form-error';
const LOGIN_MUTATION = gql`
  mutation loginMutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      token
      error
    }
  }
`;

interface ILoginForm {
  email: string;
  password: string;
}
function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<ILoginForm>();

  // const onCompleted = (loginMutationResult: loginMutationOutput) => {
  //   console.log('completed');
  //   const {
  //     loginOutput: { ok, error, token },
  //   } = loginMutationResult;
  //   if (ok) {
  //     console.log(token);
  //   }
  // };
  // const onError = (error: ApolloError) => {
  //   console.log(`--------on error ${error}`);
  // };
  // const [loginMutation, { loading, error, data: loginMutationResult }] =
  //   useMutation<loginMutationOutput, loginMutationInput>(LOGIN_MUTATION, {
  //     onCompleted,
  //     onError,
  //   });

  // const onSubmit: SubmitHandler<ILoginForm> = () => {
  //   const { email, password } = getValues();
  //   loginMutation({
  //     variables: {
  //       loginInput: {
  //         email,
  //         password,
  //       },
  //     },
  //   });
  //   // isLoggedInVar(true);
  // };

  const onSubmit = () => {
    return true;
  };
  return (
    <LoginContainer>
      <LoginBox>
        <LoginHeader>로그인</LoginHeader>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="email"
            {...register('email', {
              required: '이메일 주소를 입력해 주시기 바랍니다.',
              maxLength: 100,
              pattern: REGEX_EMAIL,
            })}
          />
          {errors.email?.message && (
            <FormErorr errorMessage={errors.email?.message} />
          )}
          {errors.email?.type === 'maxLength' && (
            <FormErorr
              errorMessage={
                '이메일 주소는 100자 이하로 입력해 주시기 바랍니다.'
              }
            />
          )}
          {errors.email?.type === 'pattern' && (
            <FormErorr
              errorMessage={'이메일 주소 형식에 맞게 입력해 주시기 바랍니다.'}
            />
          )}
          <Input
            type="password"
            placeholder="password"
            {...register('password', {
              required: '비밀번호를 입력해 주시기 바랍니다',
              minLength: 8,
              pattern: REGEX_PASSWORD,
            })}
          />
          {errors.password?.message && (
            <FormErorr errorMessage={errors.password?.message} />
          )}
          {errors.password?.type === 'minLength' && (
            <FormErorr
              errorMessage={
                '비밀번호는 8자 이상 영어+숫자+특수문자를 조합해 주시기 바랍니다.'
              }
            />
          )}
          {errors.password?.type === 'pattern' && (
            <FormErorr
              errorMessage={
                '비밀번호는 8자 이상 영어+숫자+특수문자를 조합해 주시기 바랍니다.'
              }
            />
          )}
          <Button buttonType="mainContained" width="xs" type="submit">
            로그인
          </Button>
          {/* {loginMutationResult?.loginOutput.error && (
            <FormErorr errorMessage={loginMutationResult?.loginOutput.error} />
          )} */}
        </LoginForm>
      </LoginBox>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgb(31 41 55);
`;

const LoginBox = styled.div`
  background-color: rgb(255 255 255);
  width: 100%;
  max-width: 32rem /* 512px */;
  padding-top: 2.5rem /* 40px */;
  padding-bottom: 1.75rem /* 28px */;
  border-radius: 0.5rem /* 8px */;
  text-align: center;
`;

const LoginHeader = styled.h3`
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
  color: rgb(31 41 55);
`;

const LoginForm = styled.form`
  display: grid;
  gap: 0.75rem /* 12px */;
  margin-top: 1.25rem /* 20px */;
  padding-left: 1.25rem /* 20px */;
  padding-right: 1.25rem /* 20px */;
`;

const Input = styled.input`
  background-color: rgb(243 244 246);
  padding-top: 0.75rem /* 12px */;
  padding-bottom: 0.75rem /* 12px */;
  padding-left: 1.25rem /* 20px */;
  padding-right: 1.25rem /* 20px */;
  border-radius: 0.5rem /* 8px */;
`;

// const Button = styled.button`
//   padding-top: 0.75rem /* 12px */;
//   padding-bottom: 0.75rem /* 12px */;
//   padding-left: 1.25rem /* 20px */;
//   padding-right: 1.25rem /* 20px */;
//   color:
//   font-size: 1.125rem /* 18px */;
//   line-height: 1.75rem /* 28px */;
//   border-radius: 0.5rem /* 8px */;
// `;
export default Login;
