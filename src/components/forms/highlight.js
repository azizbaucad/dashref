import { HStack, Image, VStack } from '@chakra-ui/react';
import { FormInput, FormSubmit } from '@components/common/input/FormInput';
import { highlightSchema } from '@schemas';
import { colors, forms, images, routes } from '@theme';
import { highlightFormHandler } from '@utils/handlers';
import { mapFormInitialValues } from '@utils/tools/mappers';
import { Formik } from 'formik';
import { Fragment } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const HighlightForm = () => {
  const {
    highlight: { title, status, desc, submit, cancel, week },
  } = forms.inputs;

  const options = [
    { value: 'fisrt val', name: 'My value' },
    { value: 'another val', name: 'My last val' },
  ];

  return (
    <HStack py={10} w={'100%'}>
      <VStack w={'65%'}>
        <Formik
          initialValues={mapFormInitialValues(highlightSchema._nodes)}
          validationSchema={highlightSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            highlightFormHandler({
              data: values,
              setSubmitting,
              setFieldError,
              redirectOnSuccess: routes.pages.dashboard.initial,
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Fragment>
              <HStack w={'100%'} gap={10}>
                <FormInput
                  select={true}
                  options={options}
                  {...week}
                  {...{
                    errors,
                    handleChange,
                    handleBlur,
                    touched,
                    values,
                  }}
                />
                <FormInput
                  select={true}
                  options={options}
                  {...status}
                  {...{
                    errors,
                    handleChange,
                    handleBlur,
                    touched,
                    values,
                  }}
                />
              </HStack>

              <FormInput
                {...title}
                {...{
                  errors,
                  handleChange,
                  handleBlur,
                  touched,
                  values,
                }}
              />
              <FormInput
                py={3}
                {...desc}
                textArea={true}
                {...{
                  errors,
                  handleChange,
                  handleBlur,
                  touched,
                  values,
                }}
              />

              <HStack w={'100%'} gap={10}>
                <FormSubmit
                  bgColor="white"
                  color={colors.primary.gray}
                  borderWidth={2}
                  {...{
                    touched,
                    errors,
                    handleSubmit,
                    isSubmitting,
                  }}
                  {...cancel}
                />
                <FormSubmit
                  {...{
                    touched,
                    errors,
                    handleSubmit,
                    isSubmitting,
                  }}
                  {...submit}
                  rightIcon={<FiArrowRight size={'1.5rem'} />}
                />
              </HStack>
            </Fragment>
          )}
        </Formik>
      </VStack>
    </HStack>
  );
};
