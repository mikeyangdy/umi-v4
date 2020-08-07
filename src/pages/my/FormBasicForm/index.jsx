import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import { connect, FormattedMessage, formatMessage } from 'umi';
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormBasicForm = props => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const [showPublicUsers, setShowPublicUsers] = React.useState(false);
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 7,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
      md: {
        span: 10,
      },
    },
  };
  const submitFormLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 10,
        offset: 7,
      },
    },
  };

  const onFinish = values => {
    const { dispatch } = props;
    dispatch({
      type: 'myAndFormBasicForm/submitRegularForm',
      payload: values,
    });
  };

  const onFinishFailed = errorInfo => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = changedValues => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  return (
    <PageHeaderWrapper content={<FormattedMessage id="myandformbasicform.basic.description" />}>
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{
            marginTop: 8,
          }}
          form={form}
          name="basic"
          initialValues={{
            public: '1',
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="myandformbasicform.title.label" />}
            name="title"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'myandformbasicform.title.required',
                }),
              },
            ]}
          >
            <Input
              placeholder={formatMessage({
                id: 'myandformbasicform.title.placeholder',
              })}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="myandformbasicform.date.label" />}
            name="date"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'myandformbasicform.date.required',
                }),
              },
            ]}
          >
            <RangePicker
              style={{
                width: '100%',
              }}
              placeholder={[
                formatMessage({
                  id: 'myandformbasicform.placeholder.start',
                }),
                formatMessage({
                  id: 'myandformbasicform.placeholder.end',
                }),
              ]}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="myandformbasicform.goal.label" />}
            name="goal"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'myandformbasicform.goal.required',
                }),
              },
            ]}
          >
            <TextArea
              style={{
                minHeight: 32,
              }}
              placeholder={formatMessage({
                id: 'myandformbasicform.goal.placeholder',
              })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="myandformbasicform.standard.label" />}
            name="standard"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'myandformbasicform.standard.required',
                }),
              },
            ]}
          >
            <TextArea
              style={{
                minHeight: 32,
              }}
              placeholder={formatMessage({
                id: 'myandformbasicform.standard.placeholder',
              })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="myandformbasicform.client.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="myandformbasicform.form.optional" />
                  <Tooltip title={<FormattedMessage id="myandformbasicform.label.tooltip" />}>
                    <InfoCircleOutlined
                      style={{
                        marginRight: 4,
                      }}
                    />
                  </Tooltip>
                </em>
              </span>
            }
            name="client"
          >
            <Input
              placeholder={formatMessage({
                id: 'myandformbasicform.client.placeholder',
              })}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="myandformbasicform.invites.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="myandformbasicform.form.optional" />
                </em>
              </span>
            }
            name="invites"
          >
            <Input
              placeholder={formatMessage({
                id: 'myandformbasicform.invites.placeholder',
              })}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="myandformbasicform.weight.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="myandformbasicform.form.optional" />
                </em>
              </span>
            }
            name="weight"
          >
            <InputNumber
              placeholder={formatMessage({
                id: 'myandformbasicform.weight.placeholder',
              })}
              min={0}
              max={100}
            />
            <span className="ant-form-text">%</span>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="myandformbasicform.public.label" />}
            help={<FormattedMessage id="myandformbasicform.label.help" />}
            name="publicType"
          >
            <div>
              <Radio.Group>
                <Radio value="1">
                  <FormattedMessage id="myandformbasicform.radio.public" />
                </Radio>
                <Radio value="2">
                  <FormattedMessage id="myandformbasicform.radio.partially-public" />
                </Radio>
                <Radio value="3">
                  <FormattedMessage id="myandformbasicform.radio.private" />
                </Radio>
              </Radio.Group>
              <FormItem
                style={{
                  marginBottom: 0,
                }}
                name="publicUsers"
              >
                <Select
                  mode="multiple"
                  placeholder={formatMessage({
                    id: 'myandformbasicform.publicUsers.placeholder',
                  })}
                  style={{
                    margin: '8px 0',
                    display: showPublicUsers ? 'block' : 'none',
                  }}
                >
                  <Option value="1">
                    <FormattedMessage id="myandformbasicform.option.A" />
                  </Option>
                  <Option value="2">
                    <FormattedMessage id="myandformbasicform.option.B" />
                  </Option>
                  <Option value="3">
                    <FormattedMessage id="myandformbasicform.option.C" />
                  </Option>
                </Select>
              </FormItem>
            </div>
          </FormItem>
          <FormItem
            {...submitFormLayout}
            style={{
              marginTop: 32,
            }}
          >
            <Button type="primary" htmlType="submit" loading={submitting}>
              <FormattedMessage id="myandformbasicform.form.submit" />
            </Button>
            <Button
              style={{
                marginLeft: 8,
              }}
            >
              <FormattedMessage id="myandformbasicform.form.save" />
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageHeaderWrapper>
  );
};

export default connect(({ loading }) => ({
  submitting: loading.effects['myAndFormBasicForm/submitRegularForm'],
}))(FormBasicForm);
