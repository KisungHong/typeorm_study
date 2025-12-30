import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class UserModel {
  //ID
  // @PrimaryGeneratedColumn()
  // Primary Column 은 모든 테이블에서 기본적으로 존재해야한다.
  // 테이블 안에서 각각의 ROW를 구분 할 수 있는 칼럼이다.
  //
  // @PrimaryGeneratedColumn('uuid')
  // UUID를 활용하여 중복되지 않는 특수한 id를 자동 생성
  @PrimaryGeneratedColumn()
  id: number;

  // 제목
  @Column({
    // Column Property

    // 데이터베이스에서 인지하는 칼럼 타입
    // 자동으로 유추됨
    type: 'varchar',
    // 데이터베이스 칼럼 이름
    // 프로퍼티 이름으로 자동 유추됨
    name: 'title',
    // 값의 길이
    // 입력할 수 있는 글자의 길이가 300
    length: 300,
    nullable: true,
    update: true,
    select: true,
    // find()를 실행할 때 기본으로 값을 불러올지
    // 기본값이 true
    default: 'default value',
    // 기본값
    // 아무것도 입력안했을 때 기본으로 입력되게 되는 값
    unique: false,
    // 기본겂은 false
  })
  title: string;

  // 데이터 생성 일자
  @CreateDateColumn()
  createdAt: Date;

  // 데이터 업데이트 일자
  @UpdateDateColumn()
  updatedAt: Date;

  // save()함수가 몇번 불렸는지 기억한다.
  // 처음 생성되면 값은 1이다.
  @VersionColumn()
  version: number;

  @Column()
  //   @Generated('increment')
  @Generated('uuid')
  additionalId: number;
}
