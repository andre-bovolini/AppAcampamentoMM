import React from 'react';

import {
Container,
HeaderContainer,
HeaderWrapper,
IconWrapper,
MailIconWrapper,

ContentWrapper,

FormTitleWrapper,
FormTitle,
FormIntructions,

FormWrapper,
InputWrapper,
Label,
TextInputWrapper,
TextInput,

DoubleInputWrapper,
IndividualInputWrapper,

SaveButtonWrapper,
SaveButtonTitle
} from './styles';

import MmLogo from '../../assets/mainLogo.svg'
import MailIcon from '../../assets/mailIcon.svg'
import { Button, View } from 'react-native';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';

export function FormPage() {

    const { control, handleSubmit, formState: { errors } } = useForm();


    async function submitHandler(data) {
        console.warn(data)
        // let data = {
        //     nome: 'Acampantezinho 1',
        //     idade: 13,
        //     sexo: 'masculino',
        //     endereco: 'Rua dos bobos, numero 0'
        // }
    
        // console.warn(data);
    
        // await axios.post('https://sheet.best/api/sheets/65528fe9-9289-4620-9e14-a15e5d8884c7', data)
        // .then(response => {
        //   console.log(response);
        // })
      }

return (
    <Container>
        <HeaderContainer source={require('../../assets/starPattern.png')}>
            <HeaderWrapper>
                <MailIconWrapper>
                    <MailIcon/>
                </MailIconWrapper>
                <IconWrapper>
                <MmLogo />
                </IconWrapper>
                <MailIconWrapper>
                    <MailIcon/>
                </MailIconWrapper>
            </HeaderWrapper>

        </HeaderContainer>

        <ContentWrapper>
            <FormTitleWrapper>
                <FormTitle>
                    Inscrição - Acampamento M.M.{"\n"}
                    de 16 a 22.01.22
                </FormTitle>
                <FormIntructions>
                 Preencha a ficha abaixo:
                </FormIntructions>
            </FormTitleWrapper>

            <FormWrapper>
                <InputWrapper>
                    <Label>
                    Nome do acampante:
                    </Label>
                    <TextInputWrapper>
                    <Controller
                        control={control}
                        rules={{
                        required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                            placeholder={"Nome"}
                            placeholderTextColor={"rgba(130, 130, 130, 1)"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                        )}
                        name="name"
                        defaultValue=""
                    />
                    </TextInputWrapper>
                </InputWrapper>
                <DoubleInputWrapper>
                <IndividualInputWrapper>
                    <Label>
                    Data de nascimento:
                    </Label>
                    <TextInputWrapper>
                    <Controller
                        control={control}
                        rules={{
                        required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                            placeholder={"dd/mm/AAAA"}
                            placeholderTextColor={"rgba(130, 130, 130, 1)"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                        )}
                        name="birthDate"
                        defaultValue=""
                    />
                    </TextInputWrapper>
                </IndividualInputWrapper>
                <IndividualInputWrapper>
                    <Label>
                    Sexo
                    </Label>
                    <TextInputWrapper>
                    <Controller
                        control={control}
                        rules={{
                        required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                            placeholder={"Masculino/feminino"}
                            placeholderTextColor={"rgba(130, 130, 130, 1)"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                        )}
                        name="gender"
                        defaultValue=""
                    />
                    </TextInputWrapper>
                </IndividualInputWrapper>
                </DoubleInputWrapper>
                <InputWrapper>
                    <Label>
                    Endereço:
                    </Label>
                    <TextInputWrapper>
                    <Controller
                        control={control}
                        rules={{
                        required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                            placeholder={"Rua, número, complemento"}
                            placeholderTextColor={"rgba(130, 130, 130, 1)"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                        )}
                        name="adress"
                        defaultValue=""
                    />
                    </TextInputWrapper>
                </InputWrapper>
                <DoubleInputWrapper>
                <IndividualInputWrapper>
                    <Label>
                   RG ou CPF:
                    </Label>
                    <TextInputWrapper>
                        <Controller
                        control={control}
                        rules={{
                        required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                            placeholder={"RG/CPF"}
                            placeholderTextColor={"rgba(130, 130, 130, 1)"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                        )}
                        name="document"
                        defaultValue=""
                    />
                    </TextInputWrapper>
                </IndividualInputWrapper>
                <IndividualInputWrapper>
                    <Label>
                    Colégio onde estuda:
                    </Label>
                    <TextInputWrapper>
                         <Controller
                        control={control}
                        rules={{
                        required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                            placeholder={"Colégio"}
                            placeholderTextColor={"rgba(130, 130, 130, 1)"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                        )}
                        name="school"
                        defaultValue=""
                        />
                    </TextInputWrapper>
                </IndividualInputWrapper>
                </DoubleInputWrapper>
                <InputWrapper>
                    <Label>
                    Nome da mãe:
                    </Label>
                    <TextInputWrapper>
                    <Controller
                        control={control}
                        rules={{
                        required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                            placeholder={"Nome"}
                            placeholderTextColor={"rgba(130, 130, 130, 1)"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                        )}
                        name="motherName"
                        defaultValue=""
                    />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    E-mail da mãe:
                    </Label>
                    <TextInputWrapper>
                    <Controller
                        control={control}
                        rules={{
                        required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                            placeholder={"E-mail"}
                            placeholderTextColor={"rgba(130, 130, 130, 1)"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                        )}
                        name="motherEmail"
                        defaultValue=""
                    />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    Celular da mãe:
                    </Label>
                    <TextInputWrapper>
                        <Controller
                        control={control}
                        rules={{
                        required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                            placeholder={"(XX) XXXXX-XXXX"}
                            placeholderTextColor={"rgba(130, 130, 130, 1)"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                        )}
                        name="motherPhone"
                        defaultValue=""
                    />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    Nome da pai:
                    </Label>
                    <TextInputWrapper>
                    <Controller
                        control={control}
                        rules={{
                        required: false
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput 
                            placeholder={"Nome"}
                            placeholderTextColor={"rgba(130, 130, 130, 1)"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                        )}
                        name="fatherName"
                        defaultValue=""
                    />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    E-mail da pai:
                    </Label>
                    <TextInputWrapper>
                        <Controller
                            control={control}
                            rules={{
                            required: false
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                                placeholder={"E-mail"}
                                placeholderTextColor={"rgba(130, 130, 130, 1)"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                            )}
                            name="fatherEmail"
                            defaultValue=""
                        />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    Celular da pai:
                    </Label>
                    <TextInputWrapper>
                        <Controller
                            control={control}
                            rules={{
                            required: false
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                                placeholder={"(XX) XXXXX-XXXX"}
                                placeholderTextColor={"rgba(130, 130, 130, 1)"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                            )}
                            name="fatherPhone"
                            defaultValue=""
                        />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    Contato de outro responsável:
                    </Label>
                    <TextInputWrapper>
                        <Controller
                            control={control}
                            rules={{
                            required: false
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                                placeholder={"(XX) XXXXX-XXXX"}
                                placeholderTextColor={"rgba(130, 130, 130, 1)"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                            )}
                            name="otherPhone"
                            defaultValue=""
                        />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    Convênio Médico:
                    </Label>
                    <TextInputWrapper>
                         <Controller
                            control={control}
                            rules={{
                            required: false
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                                placeholder={"Convênio"}
                                placeholderTextColor={"rgba(130, 130, 130, 1)"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                            )}
                            name="healthCareCarrier"
                            defaultValue=""
                        />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    Cuidados Extras:
                    </Label>
                    <TextInputWrapper>
                           <Controller
                            control={control}
                            rules={{
                            required: false
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                            placeholder={"Cuidados"}
                            placeholderTextColor={"rgba(130, 130, 130, 1)"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                            )}
                            name="extraCare"
                            defaultValue=""
                        />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    Como tomou conhecimento do acampamento:
                    </Label>
                    <TextInputWrapper>
                        <Controller
                            control={control}
                            rules={{
                            required: false
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                                placeholder={"Internet, amigos, outros"}
                                placeholderTextColor={"rgba(130, 130, 130, 1)"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                            )}
                            name="howGotToKnowUs"
                            defaultValue=""
                        />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    O acampante possui alergias? Se sim, descreva:
                    </Label>
                    <TextInputWrapper>
                         <Controller
                            control={control}
                            rules={{
                            required: false
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                                placeholder={"Descrição:"}
                                placeholderTextColor={"rgba(130, 130, 130, 1)"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                            )}
                            name="allergies"
                            defaultValue=""
                        />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    O acampante está fazendo ou necessita de algum tipo de controle alimentar?
                    </Label>
                    <TextInputWrapper>
                    <Controller
                            control={control}
                            rules={{
                            required: false
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                                placeholder={"Descreva"}
                                placeholderTextColor={"rgba(130, 130, 130, 1)"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                            )}
                            name="foodControl"
                            defaultValue=""
                        />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    O acampante possui alguma doença crônica ou utiliza algum medicamento? Se sim, descreva
                    </Label>
                    <TextInputWrapper>
                        <Controller
                            control={control}
                            rules={{
                            required: false
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                                placeholder={"Descrição:"}
                                placeholderTextColor={"rgba(130, 130, 130, 1)"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                            )}
                            name="cronicalIllness"
                            defaultValue=""
                        />
                    </TextInputWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Label>
                    Se houver mais alguma observação utilize este campo
                    </Label>
                    <TextInputWrapper>
                        <Controller
                            control={control}
                            rules={{
                            required: false
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput 
                                placeholder={"Observações:"}
                                placeholderTextColor={"rgba(130, 130, 130, 1)"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                />
                            )}
                            name="observations"
                            defaultValue=""
                        />
                    </TextInputWrapper>
                </InputWrapper>
            </FormWrapper>
            <SaveButtonWrapper onPress={handleSubmit(submitHandler)}>
                <SaveButtonTitle>
                    Fazer inscrição!
                </SaveButtonTitle>
            </SaveButtonWrapper>
        </ContentWrapper>

    </Container>
  );
}