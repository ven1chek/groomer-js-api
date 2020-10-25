/**
 * Groomer Service
 * API для будущей GroomCRM или назовите ее уже как-нибудь. На этой странице расписаны основные эндпоинты, по которым можно получить данные из базы данных (или положить их туда, если будет такая возможность). Также здесь можно будет протестировать эти самые эндпоинты, посмотреть ответы и всякое такое.  TODO: 1. Обновить структуру описания в соответствии со структурой БД 2. Подготовить возможность тестирования 3. Добавить тест-кейсы для всего API  ### Changelog  **v1.2.1**: Добавил эндпоинт для получения информации об авторизованном Клиенте/Мастере  **v1.2.0**: Обновлены пути, респонсы, эндпоинты для приложений вынесены в отдельный стек  **v1.1.4**: Обновил структуру WorkingDiapason  **v1.1.3**: Добавил описания возвращаемых кодов.  **v1.1.2**: Удалил упоминания Питомцев и Пушей из АПИ  **v1.1.1**: Добавил параметр \"платформа\" для заказа, заменил OneSignal на FCM + APNs  **v1.1.0**: Убрал пуши из API  **v1.0.4**: добавлены фильтры по датам, добавлено поле телефона для мастеров (для смс-оповещений), добавлено поле push_device_id для отправки пушей на телефон. 
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: kosolapus@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Client model module.
 * @module model/Client
 * @version 1.2.1
 */
class Client {
    /**
     * Constructs a new <code>Client</code>.
     * Клиент - это пользователь приложения, частный грумер или контора. Это определяется полем *type*, и влиять это может, к примеру, на ценник за работу сервиса + возможности по добавлению мастеров (для частника ограничение в 1 мастера). У клиента может быть свое настраиваемое приложение, в котором кастомно могут указываться некоторые настройки. Какие? А хрен его знает, народ упоролся и рассказывает про формы в админке, а не про типы данных. И я хз, как форматировать поле *settings*, какой оно может быть длины и все такое. Однако, определенно у каждого клиента должно быть свое наименование (поле *name*) и какой-то логотип (поле *image*) (в крайнем случае, хотя бы просто фотка грумера) 
     * @alias module:model/Client
     */
    constructor() { 
        
        Client.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Client</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Client} obj Optional instance to populate.
     * @return {module:model/Client} The populated <code>Client</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Client();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], File);
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], Object);
            }
        }
        return obj;
    }


}

/**
 * Уникальный идентификатор Клиента
 * @member {Number} id
 */
Client.prototype['id'] = undefined;

/**
 * Пароль клиента
 * @member {String} password
 */
Client.prototype['password'] = undefined;

/**
 * Тип клиента. 0 - частный мастер, 1 - компания
 * @member {Boolean} type
 */
Client.prototype['type'] = undefined;

/**
 * Название Клиента
 * @member {String} name
 */
Client.prototype['name'] = undefined;

/**
 * Электронная почта
 * @member {String} email
 */
Client.prototype['email'] = undefined;

/**
 * Логотип клиента
 * @member {File} image
 */
Client.prototype['image'] = undefined;

/**
 * @member {Object} settings
 */
Client.prototype['settings'] = undefined;






export default Client;
